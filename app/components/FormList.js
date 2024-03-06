"use client";

import { useState, useEffect } from "react";
import FormItem from "./FormItem";
import jsPDF from "jspdf";

export default function FormList() {
  const [selectedForm, setSelectedForm] = useState(null);
  const [forms, setForms] = useState([]);
  const [signature, setSignature] = useState("");
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const response = await fetch("/api/formsHandler");
    const forms = await response.json();
    setForms(forms);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmitSignature(formId) {
    console.log("formId:", formId);
    console.log("signature:", signature);

    const response = await fetch("/api/formsHandler", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formId, signature }), // Convert formId to an ObjectId
    });

    const data = await response.json();
    console.log(data.message);

    if (response.ok) {
      setMessage(data.message); // Set the message
      handleCloseForm();
      window.location.reload();
    } else {
      setMessage("An error occurred while submitting the signature.");
    }
  }

  function handleEdit(formName) {
    setSelectedForm(formName);
  }

  function handleCloseForm() {
    setSelectedForm(null);
  }

  function downloadPDF(form) {
    const doc = new jsPDF();
    const content = form.FormContent.split("\n").map((line) => line.trim());
    
    doc.setFontSize(16); // Set font size for the title
    doc.text(form.FormName, 105, 10, { align: "center" }); // Center-align the title
  
    let y = 30; // Start content after title
    doc.setFontSize(10); // Set font size for the rest of the content
  
    // Adjust line spacing to fit more content into one page
    const lineHeight = 6; // Decrease the line height
    content.forEach((line) => {
      const splitLines = doc.splitTextToSize(line, 180);
      splitLines.forEach((splitLine) => {
        doc.text(splitLine, 10, y);
        y += lineHeight; // Decrease the y value to reduce line spacing
      });
    });
  
    // Format the date
    const dateObj = new Date(form.DateUpdated);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
  
    const dateLine = `Date: ${formattedDate}`;
    const signatureLine = `Client Signature \n${form.signature} `;

    
    y += 5; // Add some space before date line
    doc.text(dateLine, 5, y);
    y += lineHeight; // Increase the y value to separate the signature and date lines
    doc.text(signatureLine, 5, y);
  
    doc.save(`${form.FormName}.pdf`);
  }
  

  return (
    <>
      <p>{message}</p>
      {forms.map((form) => (
        <div key={form._id} className="relative">
          {!selectedForm || selectedForm != form.FormName ? (
            <FormItem
              formName={form.FormName}
              createdDate={form.DateCreated}
              updatedDate={form.DateUpdated}
              isSigned={form.IsSigned}
              onView={() => handleEdit(form.FormName)}
            />
          ) : null}
          {selectedForm === form.FormName && (
            <div className="relative p-4 bg-white border">
              <h3>{form.FormName}</h3>
              {form.FormContent.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              <input
                type="text"
                className="border p-2 m-2"
                placeholder="Sign here"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
              />
              <button
                className="bg-green-400 p-2"
                onClick={() => handleSubmitSignature(form._id)}
              >
                Submit Signature
              </button>
              <button
                className="bg-blue-400 p-2 ml-auto"
                onClick={() => downloadPDF(form)}
              >
                Download PDF
              </button>
              <br />
              <button className="bg-red-400 p-2" onClick={handleCloseForm}>
                Close
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
