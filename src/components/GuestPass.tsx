interface GuestPassProps {
  guestName: string;
  totalGuests: number;
  tableNumber: string | number;
}

export default function GuestPass({
  guestName,
  totalGuests,
  tableNumber,
}: GuestPassProps) {
  return (
    <section className="guest-pass">
      <div className="guest-card">
        <h2 className="guest-name">{guestName}</h2>
        <div className="guest-details">
          <div className="detail-item">
            <span className="detail-label">Pases Personales</span>
            <span className="detail-value">{totalGuests}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Mesa Asignada</span>
            <span className="detail-value">{tableNumber}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
