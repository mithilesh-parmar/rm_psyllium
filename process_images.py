from PIL import Image
import os

images_dir = '/Users/mithileshparmar/.gemini/antigravity/brain/f4b7f2b4-98bf-4820-bf62-9dd46c375822'
out_dir = '/Users/mithileshparmar/Development/sancor_systems/rm_psyllium/public/assets/generated'
os.makedirs(out_dir, exist_ok=True)

tasks = [
    ('facility_bags_gujarat_1779027570525.png', 'facility-bags-gujarat.webp', 1122, 1402),
    ('factory_walkthrough_1779027587740.png', 'factory-walkthrough-gujarat.webp', 1536, 1024),
    ('milling_line_gujarat_1779027604918.png', 'milling-line-gujarat.webp', 1086, 1448),
    ('psyllium_husk_bag_1779027620339.png', 'psyllium-husk-export-bag.webp', 1254, 1254),
    ('import_playbook_preview_1779027636051.png', 'import-playbook-preview.webp', 1619, 971),
    ('psyllium_husk_85_grade_1779027666920.png', 'psyllium-husk-85-grade.webp', 1122, 1402),
    ('psyllium_husk_95_grade_1779027684491.png', 'psyllium-husk-95-grade.webp', 1122, 1402),
    ('psyllium_husk_98_grade_1779027701264.png', 'psyllium-husk-98-grade.webp', 1122, 1402),
    ('psyllium_husk_99_grade_1779027717868.png', 'psyllium-husk-99-grade.webp', 1122, 1402),
]

def crop_and_resize(in_path, out_path, target_w, target_h):
    img = Image.open(in_path)
    img_w, img_h = img.size
    
    target_ratio = target_w / target_h
    img_ratio = img_w / img_h
    
    if img_ratio > target_ratio:
        new_w = int(img_h * target_ratio)
        left = (img_w - new_w) / 2
        right = left + new_w
        img = img.crop((left, 0, right, img_h))
    else:
        new_h = int(img_w / target_ratio)
        top = (img_h - new_h) / 2
        bottom = top + new_h
        img = img.crop((0, top, img_w, bottom))
        
    img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    img.save(out_path, format="WEBP")

for in_name, out_name, tw, th in tasks:
    in_path = os.path.join(images_dir, in_name)
    out_path = os.path.join(out_dir, out_name)
    crop_and_resize(in_path, out_path, tw, th)

print("Processing complete!")
