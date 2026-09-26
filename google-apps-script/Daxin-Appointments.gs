/**
 * Daxin appointment-form receiver.
 *
 * This is a STANDALONE Apps Script — it is intentionally separate from
 * whatever script already writes to "Gpro demo Leads". It never touches
 * that sheet or that script; it only opens the same spreadsheet by ID and
 * writes to its own "Daxin Tech" tab (creating it on first run if missing).
 *
 * SETUP:
 * 1. Go to https://script.google.com -> "New project" (do NOT do this from
 *    inside the existing gPro script/project).
 * 2. Delete the default code and paste this whole file in.
 * 3. Replace SPREADSHEET_ID below if this ever needs to point elsewhere
 *    (it's already set to your sheet).
 * 4. Click Deploy -> New deployment -> gear icon -> "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorize the permissions it asks for (this is your
 *    own script touching your own sheet), then copy the "Web app URL"
 *    it gives you (ends in /exec).
 * 5. Paste that URL into src/config/appointmentSheet.js in the website
 *    project, as APPOINTMENT_SHEET_WEBHOOK_URL.
 *
 * If you ever edit this script after deploying, use
 * Deploy -> Manage deployments -> pencil icon -> "New version" -> Deploy,
 * so the same URL keeps working.
 *
 * Note on matching the "Gpro demo Leads" layout: I don't have visibility
 * into that sheet's actual columns (I only have this spreadsheet's ID,
 * not its contents), so I couldn't mirror its exact column order/labels.
 * The header row below is a reasonable, readable set covering every field
 * on the Daxin appointment form. Rename any header in the HEADERS array
 * below to match your gPro sheet's wording if you'd like them consistent
 * — do that before the first submission creates the sheet, or reorder/
 * rename the header row directly in the "Daxin Tech" tab afterward.
 */

var SPREADSHEET_ID = "1Oamz8IZ9O-2p2ooM5myJodXtjhNDolrowXMj9cCh_og";
var SHEET_NAME = "Daxin Tech";

var HEADERS = [
  "Timestamp",
  "Full Name",
  "Country Code",
  "Mobile Number",
  "Email",
  "City",
  "State / Region",
  "Country",
  "Purpose",
  "Appointment Date",
  "Preferred Time Slot",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getOrCreateDaxinSheet_();

    // Insert as a brand-new row 2 (right under the header) so the newest
    // lead is always at the top of the sheet, instead of appended at the bottom.
    sheet.insertRowBefore(2);
    sheet.getRange(2, 1, 1, HEADERS.length).setValues([[
      new Date(),
      data.name || "",
      data.countryCode || "",
      data.mobile || "",
      data.email || "",
      data.city || "",
      data.state || "",
      data.country || "",
      Array.isArray(data.purpose) ? data.purpose.join(", ") : (data.purpose || ""),
      data.date || "",
      data.schedule || "",
    ]]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateDaxinSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  return sheet;
}
