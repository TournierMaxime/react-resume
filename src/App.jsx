import Education from "./components/Education.jsx"
import Experience from "./components/Experience.jsx"
import Header from "./components/Header.jsx"
import Summary from "./components/Summary.jsx"
import SoftSkills from "./components/SoftSkills.jsx"
import HardSkills from "./components/HardSkills.jsx"
import "./styles/App.scss"
import React, { useRef } from "react"
import { Page, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';

const App = () => {
  const pdfRef = useRef()

  const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  left: {
    flex: 1,
    marginRight: 10,
  },
  right: {
    flex: 1,
  },
  });
  
  const MyPDFDocument = () => (
  <Document>
    <Page size="A4" style={{ padding: 20 }}>
      <Header />
      <View style={styles.container}>
        <View style={styles.left}>
          <Summary />
          <Experience />
          <Education />
        </View>
        <View style={styles.right}>
          <HardSkills />
          <SoftSkills />
        </View>
      </View>
    </Page>
  </Document>
);

  const handleDownloadPDF = async () => {
    const blob = await pdf(<MyPDFDocument />).toBlob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume_Maxime_Tournier.pdf';
    link.click();
  };

  return (
    <div className="App">
      <button onClick={handleDownloadPDF}>Télécharger en PDF</button>
      <div ref={pdfRef}>
        <Header />
        <div className="container">
          <div className="left">
            <Summary />
            <Experience />
            <Education />
          </div>
          <div className="right">
            <HardSkills />
            <SoftSkills />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
