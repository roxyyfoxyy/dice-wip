import { useState } from "react";
import "./GuideOverlay.css";

import enemyA from "../assets/guide/enemyA.png";
import enemyB from "../assets/guide/enemyB.png";
import enemyC from "../assets/guide/enemyC.png";
import lock from "../assets/guide/lock.gif";
import angreifen from "../assets/guide/angreifen.gif";
import freeze from "../assets/guide/freeze.png";
import steal from "../assets/guide/steal.png";
import strasse1 from "../assets/guide/strasse1.png";
import strasse2 from "../assets/guide/strasse2.png";
import pasch from "../assets/guide/pasch.png";
import augensumme1 from "../assets/guide/augensumme1.png";
import augensumme2 from "../assets/guide/augensumme2.png";



export default function GuideOverlay({ onClose }) {

  /* Transition */
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      onClose();
    }, 250);
  };


  return (

    /* Öffnen/Schließen + Außerhalb-Klick  */
    <div
      className={`guide-overlay ${closing ? "overlay-exit" : "overlay-enter"}`}
      onClick={handleClose}
    >
      <div
        className={`guide-window ${closing ? "window-exit" : "window-enter"}`}
        onClick={(e) => e.stopPropagation()}
      >


        <h1>GUIDE</h1>

        <div className="guide-content">

          {/* EINLEITUNG */}
          <div className="guide-section">
            <p>
              Irgendetwas ist gewaltig schiefgelaufen. Was einst als kontrolliertes Experiment begann, 
              hat sich plötzlich jeglicher Kontrolle entzogen. Die Systeme sind kollabiert, Sicherheitsbarrieren
              sind gefallen und aus den Verschmelzungen von Biologie und Technologie sind neue Kreaturen entstanden: 
              instabil, fehlerhaft und... unberechenbar. Sie folgen ihren eigenen verzerrten Mustern und gefährden alles,
              was ihnen in den Weg kommt. 
              Als Rekrut der einzigen verbliebenden Einheit bist du die letzte Instanz zwischen ihnen und dem endgültigen Chaos, 
              die verzweifelt versuchst den letzten Strang an Kontrolle zurückzugewinnen.
            </p>
              Handle, bevor nichts mehr zu retten ist!
            
          </div>


          {/* AUFBAU */}
          <div className="guide-section">
            
            Selbst in diesem Chaos findet sich eine Konstante: Muster. 
            Jede Kreatur besitzt nämlich eine definierte Schwachstelle, die sich gegen sie verwenden lässt 
            - dargestellt als Kombination aus Würfeln. <br/><br/>
            Zum Beispiel:
            
            {/* 3 Gegner-Beispiele */}
            <div className="guide-trio">

              <div className="trio-pic">
                <img src={enemyA} /> <br/>
              </div>

              <div className="trio-pic">
                <img src={enemyB} /> <br/>
              </div>

              <div className="trio-pic">
                <img src={enemyC} /> <br/>
              </div>

            </div>

          </div>



          {/* LOCK SYSTEM */}
          <div className="guide-section">

            <div className="guide-row left">
              <img src={lock} />

              <div>
                <p>
                  Auch du besitzt <b>Würfel</b> – genau 5 an der Zahl –, 
                  die deine ultimative (und einzige) Waffe darstellen.

                  In jeder Runde darfst du deine Würfel bis zu <b>3x werfen</b> und so versuchen, 
                  dir Kombinationen der vorliegenden Gegner zu 
                  erzielen. <b>Fixiere Würfel</b> oder gebe sie wieder frei, indem du sie anklickst, 
                  um gewünschte Kombinationen zu erreichen.
                </p>
              </div>
            </div>

          </div>



          {/* ENEMY KILL */}
          <div className="guide-section">

            <div className="guide-row right">

              <div>
                <p>
                  Erwürfelst du eine <b>passende Kombination</b>, 
                  kannst du einen oder mehr <b>Gegner auswählen</b> und so vom Feld räumen.
                  Damit ist der <b>notwendige Angriff</b> für diese Runde erfüllt. 
                  Nun kann ohne Bedenken gepasst werden - oder du versuchst dein Glück und
                  tätigst mit ggf. verbleibenden Würfen weitere Züge. <b>Jeder Gegner bringt Punkte</b> –
                  und je schwieriger er sind, desto mehr erhälst du!
                </p>
              </div>

              <img src={angreifen} />

            </div>

          

            <div>
                <p>
                  Solltest du allerdings alle Würfe aufbrauchen, 
                  ohne einen einzigen Feind zu beseitigen, 
                  bleibt dir nichts anderes übrig, als zu <b>passen</b>. 
                  Die Runde gilt hiermit als verloren und dir wird ohne Gnade <b>ein Health-Point entzogen</b>. 
                </p>
            </div>

          </div>




          {/* SPEZIAL GEGNER */}
          <div className="guide-section">

            <h2>Special-Gegner</h2>

            <div>
                <br/>
                Doch gib Acht!
                Einige Gegner sind tückisch. 
                Sie wissen sich zu verteidigen und dir den Kampf zu erschweren. 
                Halte nach diesen Kreaturen Ausschau:
                <br/>
            </div>

            {/* SPEZIAL GEGNER - BILDER */}
            <div className="guide-trio">

              <div className="trio-pic">
                <img src={steal} />
                <p>
                  <small>
                  Dieser Schelm stiehlt einen deiner Würfel.
                  Besiege ihn, um deine Waffe vollständig zurückzuerlangen.
                  </small>
                </p>
              </div>

              <div className="trio-pic">
                <img src={freeze} />
                <p>
                  <small>
                  Einer deiner Würfel wird eingefroren!
                  Dieser bleibt auf seiner Augenzahl stehen und lässt sich nicht mehr entsperren.
                  Besiege den Schelm, um wieder Kontrolle über alle Würfel zu haben!
                  </small>
                </p>
              </div>

            </div>

          </div>




          {/* SPECIAL COMBOS */}
          <div className="guide-section">

            <h2>Special-Kombos</h2>

            <div>
              <br/>
              Doch keine Panik – auch du hast ordentlich 'was drauf! <br/>
              Erziele bestimmte Special-Würfelkombinationen, um Boni zu erhalten:
              <br/>
            </div>

            {/* SPECIAL COMBOS - BILDER */}
            <div className="guide-combo">

              <div className="combo-pic">
                GROßE STRAßE <br/> <br/>
                <img src={strasse1} />
                <img src={strasse2} /> <br/>
                <small>
                  Diese Kombi ermöglicht es dir, einmal pro Runde einen beliebigen Gegner deiner Wahl sofort zu besiegen.
                  Wähle geschickt!
                </small>
              </div>

              <div className="combo-pic">
                5ER-PASCH <br/> <br/>
                <img src={pasch} />
                  <small> <br/>
                    Fünf gleiche Würfelaugen entfesseln enorme Wucht.
                    Du schleuderst einen beliebigen Gegner vom Feld – 
                    und reißt dabei einen weiteren Gegner dank Kettenangriff gleich mit.
                  </small>
              </div>
            </div>


              {/* SPECIAL COMBOS - 23  */}
              <div className="combo-25">

                <div className="combo-25-left">
                  AUGENSUMME 25 <br/> <br/>
                  <img src={augensumme1} /> <br/>
                  <img src={augensumme2} /> <br/>
                  [...]  <br/><br/>
                  
                    <small>
                      Erreiche mit deinen Würfeln mindestens eine Augenzahlsumme von 25, 
                      um einen Health-Point wiederzuerlangen. <br/>
                    </small> 
                  
                </div>

                <div className="combo-25-right">
                  <br/>
                  <small>Beachte jedoch:</small>
                  <div className="combo-note">
                    – Pro Runde ist nur eine Heilung möglich! <br/>
                    – Das Maximum liegt bei 10 Health-Points!
                  </div>

                  <small> <br/>
                    Übrige Health-Points bringen dir am Ende Bonus-Punkte. <br/>
                    (1 HP = 3 Punkte)
                  </small>

                </div>

              </div>

            </div>







          {/* ZIEL */}
          <div className="guide-section">
            <h2>Ziel & Spielende</h2>

            <p>
              <br/>
              Besiegst du alle Gegner, so ist die <b>Mission erfolgreich</b> erfüllt!
              Dein erreichter Punktestand wird dir zusammen mit deinen verbliebenen Health-Points angerechnet
              und deine Leistung hoch gewürdigt!
              <br/><br/>
              Sollten mitten im Spiel deine <b>Health-Points auf 0</b> fallen, ist der <b>Kampf verloren</b>,
              der Feind hat gewonnen und es werden keinerlei Punkte gewertet.
              <br/><br/>
              Enttäusche uns nicht, Rekrut!
              Beschütze die Menschheit, bezwinge die Kreaturen und knacke den nächsten Highscore.
              Viel Erfolg!
            </p>

          </div>




        </div>

        <button className="guide-close" onClick={handleClose}>
          CLOSE
        </button>

      </div>
    </div>
  );
}