import React from "react";
import { Link } from "react-router-dom";

const ServiceTerms = () => {
  return (
    <section className="container-page px-3 py-3 mb-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-3 md:mt-9 mt-4 font-bold text-center">
          Introduction
        </h2>

        <p className="mt-5 mb-3 text-gray-800">
          Welcome to Hobzz! These terms and conditions outline the rules and
          regulations for the use of Hobzz's Website, located at hobzz.com. By
          accessing this website, we assume you accept these terms and
          conditions. Do not continue to use Hobzz if you do not agree to take
          all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-bold mb-1 md:mt-10 mt-6 text-gray-800">
          Intellectual Property Rights
        </h2>

        <p className="text-gray-800">
          Other than the content you own, under these terms, Hobzz and/or its
          licensors own all the intellectual property rights and materials
          contained on this website. You are granted limited license only for
          purposes of viewing the material contained on this website.
        </p>

        <h2 className="text-xl font-bold md:mt-10 mt-6">Restrictions</h2>
        <p className="font-bold text-secondary">
          You are specifically restricted from all of the following:
        </p>

        <ul className="list-disc ms-5 mt-3 space-y-2">
          <li>
            <p className="text-gray-800">
              Publishing any website material in any other media;
            </p>
          </li>
          <li>
            <p className="text-gray-800">
              Selling, sublicensing and/or otherwise commercializing any website
              material;
            </p>
          </li>
          <li>
            <p className="text-gray-800">
              Using this website in any way that is or may be damaging to this
              website;
            </p>
          </li>
          <li>
            <p className="text-gray-800">
              Using this website contrary to applicable laws and regulations, or
              in any way may cause harm to the website, or to any person or
              business entity;
            </p>
          </li>
          <li>
            <p className="text-gray-800">
              Engaging in any data mining, data harvesting, data extracting or
              any other similar activity in relation to this website.
            </p>
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-3">Your Privacy</h3>
        <p className="text-gray-800">
          Please read our{" "}
          <Link className="text-blue-900 underline" to={`/privacy`}>
            Privacy Policy
          </Link>
        </p>

        <h2 className="text-xl font-bold md:mt-10 mt-6">No Warranties</h2>

        <p className="text-gray-800">
          This website is provided "as is," with all faults, and Hobzz makes no
          express or implied representations or warranties, of any kind related
          to this website or the materials contained on this website.
          Additionally, nothing contained on this website shall be construed as
          providing consult or advice to you.
        </p>

        <h2 className="text-xl font-bold md:mt-10 mt-6">
          Limitation of Liability
        </h2>

        <p className="text-gray-800">
          In no event shall Hobzz, nor any of its officers, directors, and
          employees, be held liable for anything arising out of or in any way
          connected with your use of this website, whether such liability is
          under contract, tort, or otherwise. Hobzz, including its officers,
          directors, and employees, shall not be held liable for any indirect,
          consequential, or special liability arising out of or in any way
          related to your use of this website.
        </p>

        <h3 className="font-bold mt-4">Variation of Terms</h3>
        <p className="text-gray-800">
          Hobzz is permitted to revise these terms at any time as it sees fit,
          and by using this website you are expected to review these terms on a
          regular basis.
        </p>

        <h3 className="font-bold mt-4">Assignment</h3>
        <p className="text-gray-800">
          The Hobzz is allowed to assign, transfer, and subcontract its rights
          and/or obligations under these terms without any notification.
          However, you are not allowed to assign, transfer, or subcontract any
          of your rights and/or obligations under these terms.
        </p>

        <h3 className="font-bold mt-4">Entire Agreement</h3>
        <p className="text-gray-800">
          These terms constitute the entire agreement between Hobzz and you in
          relation to your use of this website and supersede all prior
          agreements and understandings.
        </p>

        <h3 className="font-bold mt-4">Governing Law & Jurisdiction</h3>
        <p className="text-gray-800">
          These terms will be governed by and interpreted in accordance with the
          laws of Malta, and you submit to the non-exclusive jurisdiction of the
          state and federal courts located in Malta for the resolution of any
          disputes.
        </p>
      </div>
    </section>
  );
};

export default ServiceTerms;
