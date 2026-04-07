import os, struct, zlib, textwrap

ROOT = os.path.dirname(__file__)
REPO = os.path.dirname(ROOT)
logo_path = os.path.join(REPO, 'public', 'gi-logo-2.png')
out_dir = os.path.join(REPO, 'docs', 'pitch-deck')
os.makedirs(out_dir, exist_ok=True)
out_pdf = os.path.join(out_dir, 'GroceryIntel-Pitch-Deck.pdf')


def read_png(path):
    with open(path, 'rb') as f:
        data = f.read()
    if data[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError('Not PNG')
    pos = 8
    width = height = None
    bit_depth = color_type = None
    idat = b''
    while pos < len(data):
        ln = struct.unpack('>I', data[pos:pos+4])[0]
        ctype = data[pos+4:pos+8]
        chunk = data[pos+8:pos+8+ln]
        pos += 12 + ln
        if ctype == b'IHDR':
            width, height, bit_depth, color_type, comp, flt, interlace = struct.unpack('>IIBBBBB', chunk)
            if comp != 0 or flt != 0 or interlace != 0:
                raise ValueError('Unsupported PNG format')
        elif ctype == b'IDAT':
            idat += chunk
        elif ctype == b'IEND':
            break
    if bit_depth != 8:
        raise ValueError('Only 8-bit PNG supported')
    channels = {2:3, 6:4}.get(color_type)
    if not channels:
        raise ValueError(f'Unsupported color type {color_type}')

    raw = zlib.decompress(idat)
    stride = width * channels
    out = bytearray()
    i = 0
    prev = bytearray(stride)
    for _ in range(height):
        filt = raw[i]
        i += 1
        scan = bytearray(raw[i:i+stride])
        i += stride
        if filt == 1:  # Sub
            for x in range(channels, stride):
                scan[x] = (scan[x] + scan[x-channels]) & 0xFF
        elif filt == 2:  # Up
            for x in range(stride):
                scan[x] = (scan[x] + prev[x]) & 0xFF
        elif filt == 3:  # Average
            for x in range(stride):
                left = scan[x-channels] if x >= channels else 0
                up = prev[x]
                scan[x] = (scan[x] + ((left + up) // 2)) & 0xFF
        elif filt == 4:  # Paeth
            for x in range(stride):
                a = scan[x-channels] if x >= channels else 0
                b = prev[x]
                c = prev[x-channels] if x >= channels else 0
                p = a + b - c
                pa, pb, pc = abs(p-a), abs(p-b), abs(p-c)
                pr = a if pa <= pb and pa <= pc else (b if pb <= pc else c)
                scan[x] = (scan[x] + pr) & 0xFF
        elif filt != 0:
            raise ValueError('Unsupported filter')
        out.extend(scan)
        prev = scan

    rgb = bytearray()
    alpha = bytearray()
    if channels == 3:
        rgb = out
        alpha = None
    else:
        for px in range(0, len(out), 4):
            rgb.extend(out[px:px+3])
            alpha.append(out[px+3])
    return width, height, bytes(rgb), (bytes(alpha) if alpha else None)


class PDF:
    def __init__(self):
        self.objects = []

    def add_obj(self, content):
        self.objects.append(content)
        return len(self.objects)

    def stream_obj(self, data, extra_dict=''):
        if isinstance(data, str):
            data = data.encode('latin-1')
        hdr = f"<< /Length {len(data)} {extra_dict} >>\nstream\n".encode('latin-1')
        return self.add_obj(hdr + data + b"\nendstream")

    def write(self, path, root_id):
        out = bytearray(b'%PDF-1.4\n%\xe2\xe3\xcf\xd3\n')
        offsets = [0]
        for idx, obj in enumerate(self.objects, start=1):
            offsets.append(len(out))
            out.extend(f"{idx} 0 obj\n".encode('latin-1'))
            if isinstance(obj, str):
                out.extend(obj.encode('latin-1'))
            else:
                out.extend(obj)
            out.extend(b"\nendobj\n")
        xref = len(out)
        out.extend(f"xref\n0 {len(self.objects)+1}\n".encode('latin-1'))
        out.extend(b"0000000000 65535 f \n")
        for off in offsets[1:]:
            out.extend(f"{off:010d} 00000 n \n".encode('latin-1'))
        out.extend(f"trailer\n<< /Size {len(self.objects)+1} /Root {root_id} 0 R >>\nstartxref\n{xref}\n%%EOF".encode('latin-1'))
        with open(path, 'wb') as f:
            f.write(out)


def esc(txt):
    return txt.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')


def wrap(text, max_chars):
    return textwrap.wrap(text, width=max_chars, break_long_words=False)

W, H = 1366, 768
COLORS = {
    'bg': (236, 253, 245),
    'title': (15, 23, 42),
    'body': (71, 85, 105),
    'emerald': (5, 150, 105),
    'teal': (13, 148, 136),
    'white': (255, 255, 255),
    'light': (240, 253, 250),
}

slides = [
    ("GroceryIntel", "Track Smarter. Spend Better.", [
        "AI-powered grocery planning, receipt intelligence, and spend optimisation."
    ]),
    ("Problem", "Households struggle to control grocery spend.", [
        "Grocery costs are rising while shopping behaviour is fragmented across apps, paper receipts, and memory.",
        "Groceries make up ~12-15% of household budgets - one of the few expenses people can actually control.",
        "Yet most households lack the tools to consistently improve how they shop, spend, and eat.",
        "Manual tracking is too time-consuming, so users abandon the habit quickly."
    ]),
    ("Solution", "A unified grocery operating system.", [
        "Meal planning + smart shopping lists + low-friction receipt scanning in one workflow.",
        "Automatically extract item-level data from receipts via photo or email.",
        "Analytics reveal trends, store comparisons, and personalised spend insights."
    ]),
    ("Product", "What users can do today", [
        "Plan meals from curated recipes or imported links with automatic ingredient extraction.",
        "Generate cost-aware shopping lists based on real purchase history.",
        "Track every shop with low-friction scans and receive spend + nutrition insights."
    ]),
    ("Why It Matters", "Financial and lifestyle impact", [
        "Groceries are one of the few expenses households can truly control.",
        "They typically account for 12-15% of monthly spending.",
        "Small, consistent improvements (10-15%) can save hundreds per year.",
        "Reducing waste and improving nutrition creates both financial and lifestyle impact."
    ]),
    ("Where Budget Apps Stop", "Where Budget Apps Stop, GroceryIntel Continues", [
        "Budgeting apps are a great starting point for financial awareness. GroceryIntel goes further by focusing on groceries - the area families can actively control, optimise, and improve week by week.",
        "comparison_table"
    ]),
    ("Business Model", "Simple consumer subscription tiers", [
        "Standard: £35.99/year (or £3.59/month) for full insights + 12 scans/month.",
        "Plus: £59.99/year (or £5.99/month) for 30 scans/month + household sharing.",
        "One-month free trial lowers adoption friction and improves conversion quality."
    ]),
    ("Why AWS", "Built to scale intelligent grocery insights", [
        "Built on a scalable, serverless architecture designed for data-intensive workflows.",
        "Supports real-time receipt processing, analytics, and personalised insights at scale.",
        "Enables rapid iteration while maintaining reliability, security, and cost efficiency."
    ]),
    ("Roadmap & Ask", "Next 12 months", [
        "Expand automated ingestion, recommendation quality, and collaborative household workflows.",
        "Increase retention through proactive coaching and spend anomaly alerts.",
        "Leverage AWS credits and infrastructure support to accelerate product development, improve system performance, and scale efficiently."
    ]),
]

logo_w, logo_h, logo_rgb, logo_alpha = read_png(logo_path)

pdf = PDF()
font_obj = pdf.add_obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
font_bold_obj = pdf.add_obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

alpha_obj = None
if logo_alpha:
    alpha_stream = zlib.compress(logo_alpha)
    alpha_obj = pdf.stream_obj(alpha_stream, f"/Type /XObject /Subtype /Image /Width {logo_w} /Height {logo_h} /ColorSpace /DeviceGray /BitsPerComponent 8 /Filter /FlateDecode")

img_extra = f"/Type /XObject /Subtype /Image /Width {logo_w} /Height {logo_h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode"
if alpha_obj:
    img_extra += f" /SMask {alpha_obj} 0 R"
img_obj = pdf.stream_obj(zlib.compress(logo_rgb), img_extra)

page_ids = []
for i, (kicker, title, bullets) in enumerate(slides):
    c = []
    # background layers
    c.append(f"{COLORS['bg'][0]/255:.3f} {COLORS['bg'][1]/255:.3f} {COLORS['bg'][2]/255:.3f} rg 0 0 {W} {H} re f")
    c.append(f"{COLORS['light'][0]/255:.3f} {COLORS['light'][1]/255:.3f} {COLORS['light'][2]/255:.3f} rg 0 {H-160} {W} 160 re f")
    c.append(f"{COLORS['teal'][0]/255:.3f} {COLORS['teal'][1]/255:.3f} {COLORS['teal'][2]/255:.3f} rg 0 0 {W} 14 re f")

    # logo top right
    target_w = 90
    target_h = target_w * (logo_h/logo_w)
    x = W - 130
    y = H - 110
    c.append(f"q {target_w:.2f} 0 0 {target_h:.2f} {x:.2f} {y:.2f} cm /Im1 Do Q")

    # title block
    c.append("BT")
    c.append(f"/F2 26 Tf {COLORS['emerald'][0]/255:.3f} {COLORS['emerald'][1]/255:.3f} {COLORS['emerald'][2]/255:.3f} rg 80 {H-95} Td ({esc(kicker.upper())}) Tj")
    c.append("ET")

    title_font = 38 if kicker == "Where Budget Apps Stop" else 48
    c.append("BT")
    c.append(f"/F2 {title_font} Tf {COLORS['title'][0]/255:.3f} {COLORS['title'][1]/255:.3f} {COLORS['title'][2]/255:.3f} rg 80 {H-165} Td ({esc(title)}) Tj")
    c.append("ET")

    y_cursor = H - 250
    if kicker == "Where Budget Apps Stop":
        intro_lines = wrap(bullets[0], 104)
        for li, line in enumerate(intro_lines):
            c.append("BT")
            c.append(f"/F1 19 Tf {COLORS['body'][0]/255:.3f} {COLORS['body'][1]/255:.3f} {COLORS['body'][2]/255:.3f} rg 80 {y_cursor - (li*24)} Td ({esc(line)}) Tj")
            c.append("ET")
        y_cursor -= (len(intro_lines) * 24) + 28

        left_x = 80
        table_w = 1200
        col1_w = 420
        col2_w = table_w - col1_w
        row_h = 54
        table_rows = [
            ("Traditional budgeting apps", "GroceryIntel"),
            ("Often show only total grocery spend", "Break down every receipt into item-level insights and trends"),
            ("Usually require manual categorisation", "Automatic, accurate receipt scanning with itemised classification"),
            ("Use broad or generic spending categories", "Clear grocery-specific categories for meaningful insight"),
            ("Limited visibility into price changes", "Track personal inflation and item-level price movement over time"),
            ("Do not link cost with nutrition or value", "Connect spend with nutritional impact to support smarter choices"),
            ("Help manage a monthly budget overall", "Add the full improvement cycle: Plan -> Shop -> Track -> Improve"),
        ]
        for ridx, (left_txt, right_txt) in enumerate(table_rows):
            y_top = y_cursor - (ridx * row_h)
            bg = COLORS['white'] if ridx % 2 == 0 else (245, 250, 248)
            c.append(f"{bg[0]/255:.3f} {bg[1]/255:.3f} {bg[2]/255:.3f} rg {left_x} {y_top-row_h+4} {table_w} {row_h-2} re f")
            c.append(f"0.859 0.890 0.922 RG {left_x} {y_top-row_h+4} m {left_x+table_w} {y_top-row_h+4} l S")

            left_color = COLORS['title'] if ridx == 0 else COLORS['body']
            right_color = COLORS['emerald'] if ridx == 0 else COLORS['title']
            left_font = 18 if ridx == 0 else 15
            right_font = 18 if ridx == 0 else 15

            for li, line in enumerate(wrap(left_txt, 32)):
                c.append("BT")
                c.append(f"/F2 {left_font} Tf {left_color[0]/255:.3f} {left_color[1]/255:.3f} {left_color[2]/255:.3f} rg {left_x+14} {y_top-22-(li*18)} Td ({esc(line)}) Tj")
                c.append("ET")
            for li, line in enumerate(wrap(right_txt, 60)):
                c.append("BT")
                c.append(f"/F2 {right_font} Tf {right_color[0]/255:.3f} {right_color[1]/255:.3f} {right_color[2]/255:.3f} rg {left_x+col1_w+14} {y_top-22-(li*18)} Td ({esc(line)}) Tj")
                c.append("ET")
    else:
        for b in bullets:
            lines = wrap(b, 88)
            c.append(f"{COLORS['emerald'][0]/255:.3f} {COLORS['emerald'][1]/255:.3f} {COLORS['emerald'][2]/255:.3f} rg 84 {y_cursor+3} 7 7 re f")
            for li, line in enumerate(lines):
                c.append("BT")
                c.append(f"/F1 24 Tf {COLORS['body'][0]/255:.3f} {COLORS['body'][1]/255:.3f} {COLORS['body'][2]/255:.3f} rg 104 {y_cursor - (li*30)} Td ({esc(line)}) Tj")
                c.append("ET")
            y_cursor -= max(55, 36*len(lines)+20)

    # footer
    c.append("BT")
    c.append(f"/F1 16 Tf {COLORS['body'][0]/255:.3f} {COLORS['body'][1]/255:.3f} {COLORS['body'][2]/255:.3f} rg 80 32 Td (GroceryIntel.com) Tj")
    c.append("ET")
    c.append("BT")
    c.append(f"/F1 16 Tf {COLORS['body'][0]/255:.3f} {COLORS['body'][1]/255:.3f} {COLORS['body'][2]/255:.3f} rg {W-130} 32 Td ({i+1}/{len(slides)}) Tj")
    c.append("ET")

    content = "\n".join(c)
    content_obj = pdf.stream_obj(content)
    res_obj = pdf.add_obj(f"<< /Font << /F1 {font_obj} 0 R /F2 {font_bold_obj} 0 R >> /XObject << /Im1 {img_obj} 0 R >> >>")
    page_obj = pdf.add_obj(f"<< /Type /Page /Parent PAGES 0 R /MediaBox [0 0 {W} {H}] /Resources {res_obj} 0 R /Contents {content_obj} 0 R >>")
    page_ids.append(page_obj)

kids = ' '.join(f'{pid} 0 R' for pid in page_ids)
pages_obj = pdf.add_obj(f"<< /Type /Pages /Kids [{kids}] /Count {len(page_ids)} >>")
# replace placeholder
for idx, obj in enumerate(pdf.objects):
    if isinstance(obj, str) and 'PAGES 0 R' in obj:
        pdf.objects[idx] = obj.replace('PAGES 0 R', f'{pages_obj} 0 R')

catalog_obj = pdf.add_obj(f"<< /Type /Catalog /Pages {pages_obj} 0 R >>")
pdf.write(out_pdf, catalog_obj)
print(out_pdf)
