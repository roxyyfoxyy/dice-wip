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

          {/* AUFBAU */}
          <p>
            Doch keine Sorge - jeder Gegner ist überwindbar.
            Jede Kreatur besitzt ihre eigene Kombination aus Würfeln, mit der sich diese besiegen lässt. <br/>
            Zum Beispiel:
          </p>

          {/* 3 Gegner-Beispiele */}
          <div className="guide-trio">

            <div className="trio-pic">
              <img src={enemyA} />
              <p>NAME</p>
            </div>

            <div className="trio-pic">
              <img src={enemyA} />
              <p>NAME</p>
            </div>

            <div className="trio-pic">
              <img src={enemyA} />
              <p>NAME</p>
            </div>

          </div>

          {/* LOCK SYSTEM */}
          <div className="guide-row left">
            <img src={lock} />

            <div>
              <p>
                Auch du besitzt Würfel – genau 5 an der Zahl –, 
                die deine ultimative (und einzige) Waffe darstellen.

                In jeder Runde darfst du deine Würfel bis zu 3x werfen und so versuchen, 
                dir Kombinationen der vorliegenden Gegner zu erzielen. Fixiere Würfel 
                oder gebe sie wieder frei, indem du sie anklickst, 
                um gewünschte Kombinationen zu erreichen.
              </p>
            </div>
          </div>

          {/* ENEMY KILL */}
          <div className="guide-row right">

            <div>
              <p>
                Erwürfelst du eine passende Kombination, 
                kannst du einen oder mehr Gegner auswählen und so vom Feld räumen.
                Damit ist der notwendige Angriff für diese Runde erfüllt. 
                Nun kann ohne Bedenken gepasst werden - oder versuche dein Glück und
                tätige mit ggf. verbleibenden Würfen weitere Züge. Jeder Gegner bringt Punkte!
              </p>
            </div>

            <img src={angreifen} />

          </div>


          <div>
              <p>
                Solltest du allerdings alle Würfe aufbrauchen, 
                ohne einen einzigen Gegner zu beseitigen, 
                bleibt dir nichts anderes übrig, als zu passen. 
                Die Runde gilt hiermit als verloren und die [... Kreaturen/Gegner...] 
                entziehen dir ohne Gnade einen Health-Point. 
              </p>
            </div>

          {/* SPEZIAL GEGNER */}
          <h2>Tückische Gegner</h2>

          <div>
              <p>
                Doch gib Acht!
                Einige Gegner sind tückisch. 
                Sie wissen sich zu verteidigen und dir den Kampf zu erschweren. 
                Halte nach diesen Kreaturen Ausschau:
              </p>
          </div>

          <div className="guide-trio">

            <div className="trio-pic">
              <img src={gegner} />
              <p>
                NAME stiehlt einen deiner Würfel.
                Besiege ihn, um deine Waffe vollständig zurückzuerlangen.
              </p>
            </div>

            <div className="trio-pic">
              <img src={gegner} />
              <p>
                NAME friert einen deiner Würfel ein.
                Er bleibt auf seiner Augenzahl stehen und lässt sich dieser nicht mehr entsperren.
                Besiege den Schelm, um wieder Kontrolle über alle Würfel zu haben!
              </p>
            </div>

            <div className="trio-pic">
              <img src={gegner} />
              <p>
                NAME Lorem ipsum Fähigkeit Lorem ipsum Fähigkeit 
                Lorem ipsum Fähigkeit Lorem ipsum Fähigkeit
              </p>
            </div>

          </div>

          {/* SPECIAL COMBOS */}
          <h2>Special Kombos</h2>

          <div>
              <p>
                Doch keine Panik – auch du hast ordentlich 'was drauf!
                Erziele bestimmte Special-Würfelkombinationen, um Boni zu erhalten:
              </p>
          </div>

          <div className="guide-combo">

            <div className="combo-pic">
              <p>GROßE STRAßE</p>
              <img src={kombi} />
              <p>
                 <small>(1-2-3-4-5 oder 2-3-4-5-6)</small> <br/>
                Diese Kombi ermöglicht es dir, einen beliebigen Gegner deiner Wahl sofort zu besiegen.
                Wähle geschickt!
              </p>
            </div>

            <div className="combo-pic">
              <p>5ER-PASCH</p>
              <img src={kombi} />
              <p>
                Fünf gleiche Würfelaugen entfesseln enorme Wucht.
                Du schleuderst einen beliebigen Gegner vom Feld – 
                und reißt dabei gleich einen weiteren (einen der schwächeren) Gegner mit.
              </p>
            </div>

            <div className="combo-pic">
              <p>AUGENSUMME 23</p>
              <img src={kombi} />
              <p>
                Erreiche mit deinen Würfeln eine Augenzahlsumme von 23, 
                um einen Health-Point wiederzuerlangen
                Beachte jedoch:

                Pro Runde ist nur eine Heilung möglich!
                Das Maximum liegt bei 10 Health-Points!

                Übrige Health-Points bringen dir am Ende Bonus-Punkte.
                (1 HP = 3 Punkte)
              </p>
            </div>

          </div>

          {/* ZIEL */}
          <h2>Ziel & Spielende</h2>

          <p>
            Besiegst du alle [...], so ist die Mission erfolgreich erfüllt!
            Dein erreichter Punktestand wird dir zusammen mit deinen verbliebenen Health-Points angerechnet
            und deine Leistung gewürdigt!
            <br/><br/>
            Sollten deine Health-Points mitten im Spiel auf 0 fallen, ist der Kampf verloren,
            die [...] haben gewonnen und es werden keinerlei Punkte gewertet.
            <br/><br/>
            Enttäusche uns nicht, Soldat/...!
            Beschütze die [...], besiege so viele Gegner wie möglich und knacke den nächsten Highscore.
            Viel Erfolg!
          </p>

        </div>

        <button className="guide-close" onClick={onClose}>
          CLOSE
        </button>

      </div>
    </div>
  );
}