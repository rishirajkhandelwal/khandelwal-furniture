import { MapPin, Clock } from "lucide-react";
import Button from "../common/Button";
import { siteConfig } from "../../constants/siteConfig";

const ShowroomInfo = () => {
  const { address, timings, phone, whatsapp, googleMaps } = siteConfig;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          Visit Khandelwal Furniture
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Experience our furniture in person. Explore quality craftsmanship,
          premium materials, and find the perfect furniture for your home or
          office.
        </p>
      </div>

      {/* Address */}
      <div className="flex gap-4">
        <MapPin className="mt-1 text-[var(--primary)]" size={24} />

        <div>
          <h4 className="font-semibold">Our Showroom</h4>

          <p className="text-gray-600">
            {address.line1}
            <br />
            {address.city}
            <br />
            {address.landmark}
          </p>
        </div>
      </div>

      {/* Timings */}
      <div className="flex gap-4">
        <Clock className="mt-1 text-[var(--primary)]" size={24} />

        <div>
          <h4 className="font-semibold">Business Hours</h4>

          <p className="text-gray-600">
            {timings.days}
            <br />
            {timings.hours}
            <br />
            Closed on {timings.closed}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <Button href={`tel:${phone}`}>
          Call Now
        </Button>

        <Button
          variant="whatsapp"
          href={`https://wa.me/${whatsapp}`}
        >
          WhatsApp
        </Button>

        <Button
          variant="outline"
          href={googleMaps}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default ShowroomInfo;