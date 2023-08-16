import React, { FunctionComponent, useEffect, useState } from "react";

import smartphone from "../assets/pictures/smartphone_splashscreen.png";

type SmartphoneProps = {
  locationPath?: string;
  locationsAllow?: string[];
};

const Smartphone: FunctionComponent<SmartphoneProps> = ({
  locationPath = "/",
  locationsAllow = ["/"],
}) => {
  const [showPhone, setShowPhone] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  useEffect(() => {
    setShowPhone(locationsAllow.includes(locationPath));
  }, [locationPath, locationsAllow]);

  return (
    <div
      className={`smartphone ${showPhone ? "smartphone--show" : ""} ${
        imgLoaded ? "smartphone--loaded" : ""
      }`}
    >
      <img
        onLoad={() => setImgLoaded(true)}
        width="200"
        src={smartphone}
        alt="case tes potes home screen"
      />
    </div>
  );
};

export default Smartphone;
