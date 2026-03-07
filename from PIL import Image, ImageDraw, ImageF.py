from PIL import Image, ImageDraw, ImageFont
import os

# CONFIG
WIDTH, HEIGHT = 2560, 1600  # MacBook Pro Resolution
# Modern Dark Slate Palette
BG_COLOR = (15, 23, 42)      # Deep Slate #0F172A
CARD_COLOR = (30, 41, 59)    # Lighter Slate #1E293B
TITLE_COLOR = (255, 255, 255) # White
HEADER_COLOR = (56, 189, 248) # Sky Blue #38BDF8
BODY_COLOR = (203, 213, 225)  # Light Grey #CBD5E1
ACCENT_COLOR = (129, 140, 248) # Indigo #818CF8

# Layout Config
CARD_WIDTH = 1400
CARD_HEIGHT = 1350
CORNER_RADIUS = 40

# Fonts (Try various system fonts for a fresher look)
POSSIBLE_FONTS = [
    "/System/Library/Fonts/Supplemental/HelveticaNeue.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf"
]

def load_font(size, index=0):
    """Try to load a font from the list, index allows picking different weights if available in ttc"""
    for font_path in POSSIBLE_FONTS:
        try:
            return ImageFont.truetype(font_path, size, index=index)
        except OSError:
            continue
    return ImageFont.load_default()

def create_wallpaper():
    img = Image.new('RGB', (WIDTH, HEIGHT), color=BG_COLOR)
    d = ImageDraw.Draw(img)

    # 1. Draw Card Background
    # Calculate center position
    card_x1 = (WIDTH - CARD_WIDTH) // 2
    card_y1 = (HEIGHT - CARD_HEIGHT) // 2
    card_x2 = card_x1 + CARD_WIDTH
    card_y2 = card_y1 + CARD_HEIGHT
    
    d.rounded_rectangle(
        (card_x1, card_y1, card_x2, card_y2), 
        radius=CORNER_RADIUS, 
        fill=CARD_COLOR
    )

    # 2. Fonts
    # Heavier weight for title/header if possible (often index 1 or 2 in ttc)
    font_title = load_font(90, index=1)
    font_header = load_font(50, index=1)
    font_body = load_font(38, index=0)
    font_small = load_font(30, index=0)

    # 3. Content
    # (Text, Type)
    content = [
        ("SDE 2 ROADMAP", "title"),
        ("FEB — JULY", "subtitle"),
        ("", "spacer_large"),
        
        ("PHASE 1: FOUNDATION", "header"),
        ("Feb - Mar", "date_tag"),
        ("DSA New Topics (DP, Graphs) + Core (DBMS, OS, Nets)", "body"),
        ("", "spacer"),

        ("PHASE 2: DESIGNER", "header"),
        ("April", "date_tag"),
        ("HLD (Scalability, Case Studies) + 30 Contests", "body"),
        ("", "spacer"),
        
        ("PHASE 3: ARCHITECT", "header"),
        ("May", "date_tag"),
        ("LLD (SOLID, Patterns) + Machine Coding", "body"),
        ("", "spacer"),

        ("PHASE 4: SIMULATION", "header"),
        ("June", "date_tag"),
        ("Mock Interviews + Deep Revision", "body"),
        ("", "spacer"),

        ("PHASE 5: POLISH", "header"),
        ("July", "date_tag"),
        ("Resume, Behavioral, Buffer Clearing", "body"),
        ("", "spacer_large"),

        (">> TARGET: AUGUST 1 <<", "highlight")
    ]

    # 4. Draw Loop
    y_cursor = card_y1 + 100 # Start a bit down from top of card

    for text, style in content:
        if style == "title":
            w = d.textlength(text, font=font_title)
            d.text(((WIDTH - w)/2, y_cursor), text, fill=TITLE_COLOR, font=font_title)
            y_cursor += 100

        elif style == "subtitle":
            w = d.textlength(text, font=font_header)
            d.text(((WIDTH - w)/2, y_cursor), text, fill=ACCENT_COLOR, font=font_header)
            y_cursor += 30

        elif style == "spacer_large":
            y_cursor += 60

        elif style == "spacer":
            y_cursor += 40

        elif style == "header":
            w = d.textlength(text, font=font_header)
            d.text(((WIDTH - w)/2, y_cursor), text, fill=HEADER_COLOR, font=font_header)
            y_cursor += 55
        
        elif style == "date_tag":
            w = d.textlength(text, font=font_small)
            d.text(((WIDTH - w)/2, y_cursor), text, fill=ACCENT_COLOR, font=font_small)
            y_cursor += 45

        elif style == "body":
            w = d.textlength(text, font=font_body)
            d.text(((WIDTH - w)/2, y_cursor), text, fill=BODY_COLOR, font=font_body)
            y_cursor += 40
            
        elif style == "highlight":
            w = d.textlength(text, font=font_header)
            # Offset for simple shadow/glow
            d.text(((WIDTH - w)/2 + 2, y_cursor + 2), text, fill=(0,0,0), font=font_header)
            d.text(((WIDTH - w)/2, y_cursor), text, fill=(244, 63, 94), font=font_header)
            y_cursor += 80

    # 5. Save
    desktop = os.path.join(os.path.expanduser("~"), "Desktop")
    output_path = os.path.join(desktop, "sde_roadmap_v2.png")
    img.save(output_path)
    print(f"Aesthetic Wallpaper saved to: {output_path}")

if __name__ == "__main__":
    create_wallpaper()