import "./GuideOverlay.css";

import enemyA from "../assets/guide/enemyA.png";
import enemyB from "../assets/guide/enemyB.png";
import enemyC from "../assets/guide/enemyC.png";
import lock from "../assets/guide/lock.png";
import angreifen from "../assets/guide/angreifen.png";
import gegner from "../assets/guide/gegner.png";
import kombi from "../assets/guide/kombi.png";



export default function GuideOverlay({ onClose }) {
  return (
    <div className="guide-overlay">
      <div className="guide-window">

        <h1>GUIDE</h1>

        <div className="guide-content">

          {/* EINLEITUNG */}
          <div className="guide-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Fusce aliquam lorem lorem, vestibulum lobortis nisl tempor quis. 
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
              posuere cubilia curae; Donec non augue mattis, mattis ex et, 
              facilisis diam. Mauris pulvinar lobortis ante, ut feugiat libero 
              ornare vitae. Sed pellentesque, leo sit amet consequat placerat, 
              urna dolor faucibus metus, sed dictum libero ex in magna. Curabitur 
              tincidunt egestas ipsum, ac dictum risus porttitor nec. Praesent 
              lacinia purus non ornare ullamcorper.
            </p>
          </div>


          {/* AUFBAU */}
          <div className="guide-section">
            
            Doch keine Sorge - sie alle sind verwundbar!
            Jeder Gegner besitzt eine eigene Kombination aus Würfeln, mit der sich dieser besiegen lässt. <br/><br/>
            Zum Beispiel:
            
            {/* 3 Gegner-Beispiele */}
            <div className="guide-trio">

              <div className="trio-pic">
                <img src={enemyA} /> <br/>
                NAME
              </div>

              <div className="trio-pic">
                <img src={enemyA} /> <br/>
                NAME
              </div>

              <div className="trio-pic">
                <img src={enemyA} /> <br/>
                NAME
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
                <img src={gegner} />
                <p>
                  <small>
                  NAME stiehlt einen deiner Würfel.
                  Besiege ihn, um deine Waffe vollständig zurückzuerlangen.
                  </small>
                </p>
              </div>

              <div className="trio-pic">
                <img src={gegner} />
                <p>
                  <small>
                  NAME friert einen deiner Würfel ein.
                  Dieser bleibt auf seiner Augenzahl stehen und lässt sich nicht mehr entsperren.
                  Besiege den Schelm, um wieder Kontrolle über alle Würfel zu haben!
                  </small>
                </p>
              </div>

              <div className="trio-pic">
                <img src={gegner} />
                <p>
                  <small>
                  NAME Lorem ipsum Fähigkeit Lorem ipsum Fähigkeit 
                  Lorem ipsum Fähigkeit Lorem ipsum Fähigkeit
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
                <img src={kombi} />
                <img src={kombi} /> <br/>
                <small>
                  Diese Kombi ermöglicht es dir, einmal pro Runde einen beliebigen Gegner deiner Wahl sofort zu besiegen.
                  Wähle geschickt!
                </small>
              </div>

              <div className="combo-pic">
                5ER-PASCH <br/> <br/>
                <img src={kombi} />
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
                  <img src={kombi} /> <br/>
                  <img src={kombi} /> <br/>
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
              Enttäusche uns nicht, Soldat!
              Beschütze die Menschheit, bezwinge die Kreaturen und knacke den nächsten Highscore.
              Viel Erfolg!
            </p>

          </div>




        </div>

        <button className="guide-close" onClick={onClose}>
          CLOSE
        </button>

      </div>
    </div>
  );
}