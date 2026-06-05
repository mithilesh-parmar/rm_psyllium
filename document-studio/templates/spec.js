/* Specification Data Sheet — product/grade document (3 pages) */
(function () {
  'use strict';
  var S = window.RMStudio, h = S.h;

  S.register({
    id: 'spec',
    label: 'Specification Data Sheet',
    category: 'quality',

    fields: [
      { key: 'product', label: 'Grade', type: 'product', group: 'Document', default: 'husk95' },
      { key: 'specNo', label: 'Spec. No.', type: 'text', group: 'Document', default: 'RM/PH/07' },
      { key: 'revNo', label: 'Revision No.', type: 'text', group: 'Document', default: '01' },
      { key: 'effDate', label: 'Effective Date', type: 'text', group: 'Document', default: '21 / 05 / 2026' },
      { key: 'reviewDate', label: 'Review Date', type: 'text', group: 'Document', default: 'On or Before 3 Years From Effective Date' }
    ],

    filename: function (ctx) {
      return 'RM-Psyllium-' + h.slug(ctx.product.name) + '-Specification-Data-Sheet';
    },

    render: function (ctx) {
      var c = ctx.c, f = ctx.form, p = ctx.product, ex = ctx.exporter, e = h.esc;
      var isSeed = p.grade === 'seed';
      var docRef = e(f.specNo) + ' — Rev. ' + e(f.revNo);

      function lblRow(label, val) { return '<tr><td class="lbl">' + e(label) + '</td><td>' + val + '</td></tr>'; }
      function lblwRow(label, val) { return '<tr><td class="lbl-w">' + e(label) + '</td><td>' + e(val) + '</td></tr>'; }

      // ── PAGE 1 ──
      var meta = c.metaBar([
        { label: 'Spec. No.', value: f.specNo },
        { label: 'Revision No.', value: f.revNo },
        { label: 'Effective Date', value: f.effDate },
        { label: 'Review Date', value: f.reviewDate }
      ]);

      var prodInfo = '<table class="dt"><tbody>' +
        lblRow('Product Name', e(p.name) + (isSeed ? '' : ' Whole U.S.P./EP.')) +
        lblRow('Part Used', isSeed ? 'Plantago Seed, Plantago Ovata.' : 'Plantago Seed, Plantago Ovata.') +
        lblRow('Composition', isSeed ? '100% Psyllium Seed (Plantago Ovata).' : '100% Husk of Plantago Ovata.') +
        lblRow('Botanical Source', 'Plantago Ovata.') +
        lblRow('Harmonized System Tariff No.', e(p.hs)) +
        lblRow('Classification', isSeed ? 'Food Grade' : 'PH. EUR. / USP, Food Grade') +
        lblRow('Functional Properties', 'Natural Dietary Fiber, Hygroscopic, Mucilaginous, Water Holding Capacity, Gel Formation, Help In Constipation, Cholesterol And Control Of Diabetes, Use As Binder Or May Be Thickener') +
        lblRow('Appearance', 'No Visible Impurities, No Visible Microbiological Contamination') +
        lblRow('Country Of Origin', 'India') +
        lblRow('Preservative', 'None') +
        lblRow('Shelf Life', '2 Years From The Date Of Manufacture') +
        lblRow('Cultivation', 'Harvested') +
        '</tbody></table>';

      var testing;
      if (isSeed) {
        testing = '<table class="dt"><thead><tr><th style="width:38%">Testing Items</th><th>Specifications</th></tr></thead><tbody>' +
          lblRow('Appearance', e(p.colour) + ' Coloured Seed. The Odour Is Not Marked') +
          lblRow('Taste', 'Bland Mucilaginous') +
          lblRow('Texture', 'Oval / Boat Shaped Seed') +
          '<tr style="font-weight:700;"><td class="lbl" style="font-weight:700;">Purity</td><td>' + e(p.purity).replace('Not less than', 'Not Less Than') + '</td></tr>' +
          lblRow('Moisture', '12% Maximum') +
          lblRow('Total Ash', '4% Maximum') +
          lblRow('Acid Insoluble Ash', '1% Maximum') +
          '<tr style="font-weight:700;"><td class="lbl" style="font-weight:700;">Swell Volume</td><td>' + e(p.swell).replace('Not less than', 'Not Less Than') + '</td></tr>' +
          lblRow('Foreign Smell / Test', 'None') +
          lblRow('Foreign Matter', '2% Maximum') +
          '</tbody></table>';
      } else {
        testing = '<table class="dt"><thead><tr><th style="width:38%">Testing Items</th><th>Specifications</th></tr></thead><tbody>' +
          lblRow('Appearance', e(p.colour) + ' Coloured Husk. The Odour Is Not Marked') +
          '<tr><td class="lbl">Identifications (Microscopically A)<br><br><strong>As Per USP</strong></td><td>Mounted In Cresol-Cell, Viewed Microscopically Are Composed Of Polygonal Prismatic Cells Having 4 To 6 Straight Or Slightly Wavy Walls</td></tr>' +
          '<tr class="sub-row"><td class="lbl">(Microscopically B)</td><td>Mounted In Alcohol &amp; Irrigated With Water Viewed Microscopically, The Mucilage In The Outer Part Of The Epidermal Cells Swells Rapidly Goes Into Solution</td></tr>' +
          lblRow('Taste', 'Bland Mucilaginous') +
          lblRow('Texture', 'Husk') +
          '<tr style="font-weight:700;"><td class="lbl" style="font-weight:700;">Purity</td><td>' + e(p.purity).replace('Not less than', 'Not Less Than') + '</td></tr>' +
          lblRow('Moisture', '12% Maximum') +
          lblRow('Total Ash', '4% Maximum') +
          lblRow('Acid Insoluble Ash', '1% Maximum') +
          '<tr style="font-weight:700;"><td class="lbl" style="font-weight:700;">Swell Volume</td><td>' + e(p.swell).replace('Not less than', 'Not Less Than') + '</td></tr>' +
          lblRow('PH', '4–7') +
          lblRow('Light Extraneous Matter', '5% Maximum') +
          lblRow('Heavy Extraneous Matter', '1% Maximum') +
          lblRow('Foreign Smell / Test', 'None') +
          lblRow('Foreign Bodies (Stones, Glass &amp; Metals)', 'None') +
          lblRow('Total Consumable Fiber', 'About 78%') +
          lblRow('Insect Fragments Including Mites', '27 Parts / 25 Gm') +
          '</tbody></table>';
      }

      var page1 = c.page({
        exporter: ex,
        inner: c.header(ex) + meta + c.docTitle('Data Sheet') +
          c.secHead('Product Information') + prodInfo +
          c.secHead('Testing Items & Specifications') + testing,
        docRef: docRef, pageOf: 'Page 1 of 3'
      });

      // ── PAGE 2: micro + heavy metals + compliance ──
      var micro = '<table class="dt"><tbody>' +
        '<tr class="span-head"><td colspan="2">Microbiological Limits *</td></tr>' +
        lblwRow('Total Aerobic Plate Count', 'Max. 100,000 Cfu/Gm') +
        lblwRow('Total Yeast & Mould Per Gm', 'Max. 1,000 Cfu/Gm') +
        lblwRow('E. Coli Per Gm', 'Absent') +
        lblwRow('Coliform', 'Max. 100 Cfu/Gm') +
        lblwRow('Salmonella Per 25 Gram', 'Absent') +
        lblwRow('Pseudomonas aeruginosa', '<10 Cfu/Gm') +
        lblwRow('Staphylococcus Aureus', '<10 Cfu/Gm') +
        '<tr class="span-head"><td colspan="2">Heavy Metals</td></tr>' +
        lblwRow('Lead (Pb)', '< 1 PPM') +
        lblwRow('Cadmium (Cd)', '< 0.5 PPM') +
        lblwRow('Arsenic (As)', '< 0.5 PPM') +
        lblwRow('Mercury (Hg)', '< 0.1 PPM') +
        '</tbody></table>';

      var compliance = '<table class="dt"><tbody>' +
        lblRow('Pesticide', 'As Per USP-561 &amp; According EU 396/2005 — Meets Requirements') +
        '<tr style="font-weight:700;"><td class="lbl" style="font-weight:700;">Certified</td><td>BRC, FSSAI, ISO 22000, FSSC 22000, Kosher, Halal, GMP, HACCP</td></tr>' +
        lblRow('Regulation', 'The Product Shall Fit The European Laws / USP Laws. In Case Of New Requests, The New Obligations Will Be Sent For Application.') +
        lblRow('GMO', 'Non-GMO. Does Not Contain GMO, Was Not Processed Using GMO Raw Material Or GMO Based Auxiliary Agents.') +
        lblRow('Storage', 'Store In Tightly Sealed Containers In A Cool, Dry Area. Protect From Insect Infestation, Excess Moisture, Strong Odors &amp; Any Adulterants') +
        lblRow('Packaging', 'Multi Wall Paper Bonded Poly Woven Bags With PE In Liner Or Big Bags [Super Sacks] With Product Name, Production Date, Batch/Lot Number, Net Weight, Gross Weight Clearly Marked.') +
        '<tr style="font-weight:700;"><td class="lbl" style="font-weight:700;">Shelf Life (Unopened)</td><td>2 Years From The Date Of Manufacture</td></tr>' +
        lblRow('Packing Size', 'Available In 10 Kgs, 15 Kgs, 25 Kgs, 450 Kgs, 500 Kgs, 950 Kgs, 1,000 Kgs') +
        lblRow('Palletization', 'Available With Wooden / Plastic Palletization With / Without Corrugated Boxes Wrapped With Gummed Shrink Paper') +
        '<tr style="font-weight:700;"><td class="lbl" style="font-weight:700;">Container Capacity</td><td>20 Feet — 12 MT Floor Loaded&nbsp;&nbsp;|&nbsp;&nbsp;40 Feet — 25 MT Floor Loaded</td></tr>' +
        '</tbody></table>';

      var page2 = c.page({
        exporter: ex,
        inner: c.header(ex) + c.secHead('Microbiological Limits & Heavy Metals') + micro +
          '<p class="note">* Steam sterilization is available upon request and will significantly reduce microbiological counts.</p>' +
          c.secHead('Compliance, Packaging & Logistics') + compliance,
        docRef: docRef, pageOf: 'Page 2 of 3'
      });

      // ── PAGE 3: allergens + applications ──
      var allergens = ['Gluten', 'Wheat And Products Thereof',
        'Other Cereals Containing Gluten (Rye, Barley, Oats, Spelt, Kamut) And Products Thereof',
        'Crustacean And Products Thereof', 'Mustard And Products Thereof',
        'Sesame Seeds And Products Thereof', 'Celery And Products Thereof'];
      var allergenRows = allergens.map(function (a) {
        return '<tr><td class="allergen-name">' + e(a) + '</td><td class="no-val">No</td><td class="no-val">No</td><td class="no-val">No</td></tr>';
      }).join('');
      var allergenTbl = '<table class="dt"><thead><tr><th style="width:46%; text-align:left">Allergen</th>' +
        '<th class="center">Present In Product</th><th class="center">Processed On Equipment</th><th class="center">Used On Site</th></tr></thead><tbody>' +
        allergenRows + '</tbody></table>';

      var apps = '<div class="app-grid">' +
        appCell('Pharmaceutical Industry', 'Laxation, Diabetes, Cholesterol Level, Hemorrhoids…') +
        appCell('Food & Beverage Industry', 'Ice Cream, Biscuits, Rice, Instant Noodles, Breakfast Cereals, Bakery Products, Beverages, Processed Packed Foods, Fruit Drinks, Flavored Drinks, Cakes, Jams…') +
        appCell('Dietary Supplement Industry', 'Capsules, Diet Supplements, Powder, Granules…') +
        appCell('Pet Food Industry', 'Intestinal Disorders, Diarrhea, Hindgut, Milk-Off Take, Hair Balls Removal…') +
        '<div class="app-cell" style="grid-column: 1 / -1;"><span class="app-cell-title">Cosmetic Industry</span><p>Skin Care Products, Anti-Aging Herbal Products…</p></div>' +
        '</div>';

      var page3 = c.page({
        exporter: ex,
        inner: c.header(ex) + c.secHead('Allergen Declaration') + allergenTbl +
          c.secHead('Industry Applications') + apps,
        docRef: docRef, pageOf: 'Page 3 of 3'
      });

      return page1 + '<div class="page-break"></div>' + page2 + '<div class="page-break"></div>' + page3;

      function appCell(t, b) { return '<div class="app-cell"><span class="app-cell-title">' + e(t) + '</span><p>' + e(b) + '</p></div>'; }
    }
  });
})();
