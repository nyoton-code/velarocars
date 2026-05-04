import jsPDF from "jspdf";

interface ContractData {
  clientName: string;
  phone: string;
  carName: string;
  pickupDate: string;
  returnDate: string;
  pricePerDay: number;
  totalPrice: number;
}

export function generateContract(data: ContractData) {
  const doc = new jsPDF();

  // Colors
  const gold = [232, 160, 32];
  const dark = [20, 20, 20];

  // ── Header ──
  doc.setFillColor(...dark);
  doc.rect(0, 0, 210, 30, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.text("VELARO RENTAL", 14, 18);

  // ── Title ──
  doc.setTextColor(...gold);
  doc.setFontSize(16);
  doc.text("Car Rental Contract", 14, 45);

  // ── Info Section ──
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);

  let y = 60;

  const line = (label: string, value: string) => {
    doc.setFont(undefined, "bold");
    doc.text(label, 14, y);
    doc.setFont(undefined, "normal");
    doc.text(value, 80, y);
    y += 10;
  };

  line("Client Name:", data.clientName);
  line("Phone:", data.phone);
  line("Car:", data.carName);
  line("Pickup Date:", data.pickupDate);
  line("Return Date:", data.returnDate);
  line("Price / Day:", `€${data.pricePerDay}`);
  line("Total Price:", `€${data.totalPrice}`);

  // ── Terms ──
  y += 10;
  doc.setFont(undefined, "bold");
  doc.text("Terms & Conditions:", 14, y);

  doc.setFont(undefined, "normal");
  y += 8;

  const terms = [
    "• The renter is responsible for the vehicle during the rental period.",
    "• The vehicle must be returned in the same condition.",
    "• Fuel policy must be respected.",
    "• Any damage will be charged accordingly.",
  ];

  terms.forEach((t) => {
    doc.text(t, 14, y);
    y += 7;
  });

  // ── Signature ──
  y += 20;

  doc.text("Client Signature:", 14, y);
  doc.line(60, y, 140, y);

  y += 15;

  doc.text("Company Signature:", 14, y);
  doc.line(60, y, 140, y);

  // ── Footer ──
  doc.setTextColor(150);
  doc.setFontSize(10);
  doc.text("Velaro Rental - Marrakech", 14, 280);

  // Save
  doc.save(`contract-${data.clientName}.pdf`);
}