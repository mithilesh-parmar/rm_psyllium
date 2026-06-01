#!/usr/bin/env python3
import os
import sys
import time
import requests

# ---------------------------------------------------------------------------
# DESIGN SPECIFICATION & SLIDE COPY FOR RM PSYLLIUM
# ---------------------------------------------------------------------------
MARKDOWN_SLIDES = """
Generate a highly professional, premium B2B presentation tailored for a B2B LinkedIn Carousel. 

### Brand Style & Custom Theme Instructions:
- Layout Style: Clean, minimalist Swiss design. High-contrast grids, professional margins, and plenty of empty space.
- Heading Font: Inter (Bold, modern geometric sans-serif)
- Body Font: Inter (Regular, highly readable)
- Color Palette:
  * Primary Dark / Slide Text: Deep Navy Blue (#14213d)
  * Slide Background: Soft Warm Off-White (#f6f8f4)
  * Primary Agricultural Accent: Forest Green (#2f6f4e)
  * Secondary Text & Details: Slate Grey (#54707e)
  * Highlight Accents: Golden Yellow (#c6842e)
- Theme: Clean-label food ingredients, organic agricultural processing, high-end laboratory testing, and modern shipping logistics.
- Illustration Style Rules:
  * Style Name: Modern Botanical Line-Art / Outlined Flat Vector Illustration.
  * Line Style: Thin, clean, dark charcoal outlines with flat solid color fills.
  * Background Color: Solid warm off-white (#f6f8f4) background with zero gradients or shadows.
  * Visual Accents: Flat sage green (#2f6f4e) and golden yellow (#c6842e) flat colors.

---

### Slide Content:

## Slide 1: Sourcing De-risked
*Presented by RM Psyllium | rmpsyllium.com*

# The QA Audit Checklist for Bulk Psyllium Sourcing
### 5 parameters your supplier must prove before you sign the contract.

[Image Prompt: A modern, minimalist flat vector illustration in a botanical line-art style of clean green agricultural psyllium stalks with golden grain spikes and little white seeds falling around them. Thin dark charcoal outlines with flat sage green and golden yellow color fills on a solid warm off-white #f6f8f4 background. Zero gradients or shadows.]

---

## Slide 2: Parameter 1
*01 / SPECIFICATION CONTROL*

# Particle Size Distribution (Mesh Size)
The particle dimension determines how your psyllium behaves during processing and formulation.

*   **Coarse Husk (40 Mesh)**
    *   Slow, gradual water absorption.
    *   Creates a steady, high-viscosity mucilage.
    *   Best for bulk animal nutrition (equine digestion).
*   **Fine Powder (100 Mesh)**
    *   Near-instant hydration and swelling.
    *   Best for supplement capsule filling and commercial gluten-free baking.

> **QA Sourcing Action:** Mismatched mesh sizes cause severe weight variations in capsules and clumping in bakeries. Demand a lot-specific sieve test in your COA.

[Image Prompt: A modern, minimalist flat vector illustration in a botanical line-art style of a circular laboratory metal sieve, showing coarse golden husk flakes on the left and fine soft cream powder on the right. Thin dark charcoal outlines with flat sage green and warm cream color fills on a solid warm off-white #f6f8f4 background. Zero gradients or shadows.]

---

## Slide 3: Parameter 2
*02 / RAW PURITY*

# Swelling Volume Dynamics
The ultimate indicator of your psyllium's water-binding capacity.

*   **The USP/EP Standard**
    *   High-purity 99% grade psyllium must achieve a swelling volume exceeding **40 ml/g**.
    *   Lower food grades (e.g., 85%) typically sit below **30 ml/g**.
*   **Why Swelling Volume Drops**
    *   Poor separation leaves inactive seed fragments.
    *   Excessive heat during milling degrades the functional polysaccharides.

> **QA Sourcing Action:** Never accept visual estimates or generic specification sheets. Insist on verification via the official USP swelling volume methodology.

[Image Prompt: A modern, minimalist flat vector illustration in a botanical line-art style of a scientific laboratory glass beaker. Inside the beaker, a transparent, high-viscosity sage green hydrocolloid gel is swelling and rising upwards. Thin dark charcoal outlines with flat sage green color fills on a solid warm off-white #f6f8f4 background. Zero gradients or shadows.]

---

## Slide 4: Parameter 3
*03 / SHELF-LIFE & SAFETY*

# Moisture Control (<10%)
Preventing microbiological contamination during global transit.

*   **Hygroscopic Risk**
    *   Psyllium actively absorbs moisture from the environment.
    *   If moisture exceeds 10% inside shipping bags, mold, yeast, and Salmonella can rapidly develop during warm ocean transit.
*   **Protection Framework**
    *   Keep moisture consistently under 10% using dry-air processing.
    *   Pack in multi-wall export bags with protective inner LDPE food-grade liners.

> **QA Sourcing Action:** Audit lot-specific moisture values pre-shipment. Ensure your bags are sealed immediately after testing.

[Image Prompt: A modern, minimalist flat vector illustration in a botanical line-art style of a heavy-duty industrial 3-ply paper shipping sack, with a cutaway showing a clean inner plastic protective liner. Rain and moisture droplets are crossed out nearby. Thin dark charcoal outlines with flat paper-kraft brown and sage green fills on a solid warm off-white #f6f8f4 background. Zero gradients or shadows.]

---

## Slide 5: Parameter 4
*04 / IMPURITY ANALYSIS*

# Total Ash Limits (<4%)
Measuring soil, sand, and dust contamination.

*   **What is Ash?**
    *   The inorganic mineral residue left after thermal sample combustion.
    *   High ash directly indicates sand and agricultural soil adhering to the husk.
*   **Purity Limits**
    *   Strictly under **4.0%** for commercial food grade.
    *   Strictly under **3.0%** for high-purity pharmaceutical USP grade.

> **QA Sourcing Action:** High ash indicates rushed raw seed pre-cleaning before milling. Settle only for suppliers utilizing multi-stage gravity de-stoners.

[Image Prompt: A modern, minimalist flat vector illustration in a botanical line-art style of an agricultural gravity separator machine's vibrating deck, clean golden psyllium seeds are separated on top, while small dark mud particles and sand fall below through a fine screen. Thin dark charcoal outlines with flat sage green and golden yellow fills on a solid warm off-white #f6f8f4 background. Zero gradients or shadows.]

---

## Slide 6: Parameter 5
*05 / EXPORT COMPLIANCE*

# Pre-Shipment Compliance Pack
Avoid container delays, customs audits, and port demurrage.

*   **Lot-Specific COA**
    *   Detailed NABL lab analysis matching the exact batch codes on your bags.
*   **Phytosanitary Certificate**
    *   Government proof confirming the cargo is free from quarantine pests.
*   **Attested Fumigation Certificate**
    *   Verification of container treatment to prevent insect activity.
*   **Certificate of Origin (COO)**
    *   Attested documents for tariff clearance.

> **QA Sourcing Action:** Insist on reviewing digital draft copies of this complete trade compliance pack before the container departs Mundra port.

[Image Prompt: A modern, minimalist flat vector illustration in a botanical line-art style of a premium B2B clipboard holding document sheets with clean grids, lot numbers, and a round official quality-verification stamp. Thin dark charcoal outlines with flat sage green and slate blue fills on a solid warm off-white #f6f8f4 background. Zero gradients or shadows.]

---

## Slide 7: Direct Sourcing
*RM Psyllium | Siddhpur, Gujarat*

# Direct-From-Source Sourcing, De-risked
We are building a modern 2,000 MT processing facility on the Gujarat/Rajasthan border.

*   **Lot-Specific NABL COAs**
    *   Verifiable quality assurance per lot, shared before shipping.
*   **Democratized "No MOQ" Policy**
    *   Supporting growth brands with orders from 500 KG trial batches to full container loads.
*   **Direct-From-Mill Pricing**
    *   Bypass trading desks, broker commissions, and middleman markups.

### Visit rmpsyllium.com to configure your technical specification and request a sample.

[Image Prompt: A modern, minimalist flat vector illustration in a botanical line-art style of a large, state-of-the-art modern agricultural processing mill building in Siddhpur, surrounded by clean trucks and green fields. Thin dark charcoal outlines with flat sage green and deep navy fills on a solid warm off-white #f6f8f4 background. Zero gradients or shadows.]
"""

def generate_carousel():
    print("==============================================================")
    print("    RM Psyllium: Gamma.app API Carousel Generator v1.1")
    print("==============================================================")

    # 1. Fetch API Key
    api_key = os.getenv("GAMMA_API_KEY")
    if not api_key:
        api_key = input("Enter your Gamma API Key (starts with sk-gamma-): ").strip()
        if not api_key:
            print("Error: API Key is required to connect to Gamma.app.")
            sys.exit(1)

    base_url = "https://public-api.gamma.app/v1.0"
    headers = {
        "X-API-KEY": api_key,
        "Content-Type": "application/json"
    }

    # 2. Setup POST Payload
    payload = {
        "inputText": MARKDOWN_SLIDES,
        "textMode": "preserve",
        "format": "presentation",
        "exportAs": "pdf"
    }

    print("\n[Step 1] Submitting presentation generation request to Gamma API...")
    
    try:
        response = requests.post(f"{base_url}/generations", headers=headers, json=payload)
        if response.status_code != 200 and response.status_code != 201:
            print(f"Error: API request failed with status code {response.status_code}")
            print(response.text)
            sys.exit(1)
            
        data = response.json()
        generation_id = data.get("id")
        if not generation_id:
            print("Error: Did not receive generation ID from the Gamma API.")
            print(data)
            sys.exit(1)
            
        print(f"Success: Submission accepted. Generation ID: {generation_id}")
        
    except Exception as e:
        print(f"Error: Connection to Gamma API failed. {e}")
        sys.exit(1)

    # 3. Poll Status
    print("\n[Step 2] Polling generation status (checking every 5 seconds)...")
    status = "pending"
    gamma_url = None
    export_url = None
    
    while status in ["pending", "processing"]:
        try:
            status_response = requests.get(f"{base_url}/generations/{generation_id}", headers=headers)
            if status_response.status_code == 200:
                status_data = status_response.json()
                status = status_data.get("status", "pending")
                print(f"Current Status: [{status.capitalize()}]...")
                
                if status == "completed":
                    gamma_url = status_data.get("gammaUrl")
                    export_url = status_data.get("exportUrl")
                    break
                elif status == "failed":
                    print("Error: Presentation generation failed on Gamma.app.")
                    sys.exit(1)
            else:
                print(f"Warning: Poll returned status code {status_response.status_code}")
        except Exception as e:
            print(f"Warning: Poll error encountered ({e}). Retrying...")
            
        time.sleep(5)

    print("\n[Step 3] Presentation completed successfully.")
    if gamma_url:
        print(f"Interactive Web URL: {gamma_url}")
        
    # 4. Download PDF
    if export_url:
        print("\n[Step 4] Downloading exported PDF slide deck...")
        output_filename = "QA_Audit_Checklist_Carousel.pdf"
        try:
            pdf_response = requests.get(export_url, stream=True)
            if pdf_response.status_code == 200:
                with open(output_filename, 'wb') as f:
                    for chunk in pdf_response.iter_content(chunk_size=8192):
                        f.write(chunk)
                
                # Get absolute path for confirmation
                abs_path = os.path.abspath(output_filename)
                print(f"Success: PDF Carousel saved to: {abs_path}")
                print("\nYour B2B LinkedIn PDF Carousel is fully ready to upload.")
            else:
                print(f"Error: Failed to download PDF from {export_url} (Status: {pdf_response.status_code})")
        except Exception as e:
            print(f"Error: Failed to download PDF. {e}")
            print(f"You can download it manually from: {export_url}")
    else:
        print("\nNote: Export URL was not returned. You can view or export it from the Web URL above.")

if __name__ == "__main__":
    generate_carousel()
