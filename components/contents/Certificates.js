import React from "react";
import Certificate from "./Certificate";

const Certificates = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
      <Certificate src="/certs/moa.jpg" alt="MOA" />
      <Certificate src="/certs/alibaba.jpg" alt="Alibaba" />
      <Certificate src="/certs/thm.png" alt="Tryhackme Room" />
      <Certificate src="/certs/compfest.jpg" alt="Participant Certificate" />
      <Certificate src="/certs/rapidminer.jpg" alt="Professional Certificate" />
      <Certificate
        src="/certs/dg_basic.jpg"
        alt="Dicoding Basic Programming"
        link="https://www.dicoding.com/certificates/4EXG4YKLEPRL"
      />
      <Certificate
        src="/certs/dg_js.jpg"
        alt="Dicoding Javascript"
        link="https://www.dicoding.com/certificates/KEXLLG1KWXG2"
      />
      <Certificate
        src="/certs/dg_mp.jpg"
        alt="Dicoding Project Management"
        link="https://www.dicoding.com/certificates/1OP81D10LZQK"
      />
      <Certificate
        src="/certs/dg_react.jpg"
        alt="Dicoding Reactjs"
        link="https://www.dicoding.com/certificates/QLZ9R7REMP5D"
      />
      <Certificate
        src="/certs/dg_sql.jpg"
        alt="Dicoding SQL"
        link="https://www.dicoding.com/certificates/EYX4YRMMOZDL"
      />
    </div>
  );
};

export default Certificates;
