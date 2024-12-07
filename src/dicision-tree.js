const dicision_tree = <>
<div class="decision-tree">
        <h1>Apfelbaum Entscheidungsbaum</h1>

        <div class="question" id="question-1">
            <h2>Wie alt ist der Apfelbaum?</h2>
            <button data-target="info-jung">Jünger als 12-15 Jahre</button>
            <button data-target="info-alt">Älter als 12-15 Jahre</button>
        </div>

        <div class="info hidden" id="info-jung">
            <p>
                Sie möchten einen Jungbaum schneiden! Ziel: Aufbau einer harmonischen und tragfähigen Baumkrone,
                die einen Kompromiss zwischen Lichteinfall und Statik ermöglicht.
                <strong>Schnittintervall:</strong> 1-mal jährlich.
            </p>
            <button data-target="question-2-jung">Weiter</button>
        </div>

        <div class="question hidden" id="question-2-jung">
            <h2>In welcher Jahreszeit/Vegetationsperiode befinden Sie sich?</h2>
            <button data-target="result-jung-winter">Vegetationslose Zeit (Ende Oktober bis Anfang April)</button>
            <button data-target="result-jung-sommer">Vegetationszeit (April bis Oktober)</button>
        </div>

        <div class="result hidden" id="result-jung-winter">
            <p>Sie können mit dem Schnitt beginnen! Beachten Sie folgende Prinzipien:</p>
            <ul>
                <li><strong>Leitäste:</strong> Die Hauptäste bilden das Stützgerüst.</li>
                <li><strong>Saftwaage:</strong> Gleiche Höhe der Äste sorgt für gleichmäßigen Austrieb.</li>
                <li><strong>Dachwinkel:</strong> Eine gedachte Linie hilft, die Stammverlängerung festzulegen.</li>
            </ul>
            <button data-target="result-jung-anschneiden">Schneiden und Wuchs fördern (Anschneiden)</button>
            <button data-target="result-jung-ableiten">Wuchs bremsen (Ableiten)</button>
        </div>

        <div class="result hidden" id="result-jung-anschneiden">
            <p>
                Mit dem "Anschneiden auf Blattknospe" legt man fest, wo der Baum kräftige Triebe bilden soll.
                Der Schnitt erfolgt 1 cm oberhalb der gewählten Blattknospe.
            </p>
        </div>

        <div class="result hidden" id="result-jung-ableiten">
            <p>
                Mit dem "Ableiten auf einen Trieb" wird festgelegt, welche Triebe zu Fruchtholz werden.
                Der Schnitt erfolgt oberhalb des ausgewählten Seitentriebs.
            </p>
        </div>

        <div class="result hidden" id="result-jung-sommer">
            <p>
                Sie sollten mit dem Schnitt bis Ende Oktober warten, um den Baum nicht zu schwächen!
                Unterstützen Sie den Baum durch Bewässerung und das Hacken einer Baumscheibe (ca. 1m Durchmesser).
            </p>
        </div>

        <div class="info hidden" id="info-alt">
            <p>
                Sie möchten einen Altbaum schneiden! Ziel: Verlängerung der Lebens- und Ertragsphase durch Herstellung
                eines Gleichgewichts zwischen Neutrieb und Ertrag sowie stabiler Statik.
                <strong>Schnittintervall:</strong> alle 3-7 Jahre.
            </p>
            <button data-target="question-2-alt">Weiter</button>
        </div>

        <div class="question hidden" id="question-2-alt">
            <h2>In welcher Jahreszeit/Vegetationsperiode befinden Sie sich?</h2>
            <button data-target="result-alt-winter">Vegetationsruhe</button>
            <button data-target="result-alt-blüten">Blütenstand</button>
            <button data-target="result-alt-blatt">Blattstand</button>
            <button data-target="result-alt-fall">Kurz vor Blattfall</button>
        </div>

        <div class="result hidden" id="result-alt-winter">
            <p>
                Jetzt ist der ideale Schnittzeitraum, wenn Ihr Apfelbaum schwachtriebig ist, d.h. einen Neutrieb von 2-10 cm hat.
                Bei einem Apfelbaum, der längere Neutriebe hat, kann noch gewartet werden bis zum Blütenstand (triebig, 10-25 cm),
                bis hin zum Blattstand (starktriebig, 25-50 cm) oder bis kurz vor dem Blattfall (sehr starktriebig, 50-100 cm).
            </p>
            <button data-target="techniken">So wird geschnitten</button>
        </div>

        <div class="result hidden" id="result-alt-blüten">
            <p>
                Jetzt ist der ideale Schnittzeitraum, wenn Ihr Apfelbaum triebig ist (10-25 cm Neutrieb).
                Bei kürzeren Neutrieben sollten Sie bis zur nächsten Vegetationsruhe ab November warten.
            </p>
            <button data-target="techniken">So wird geschnitten</button>
        </div>

        <div class="result hidden" id="result-alt-blatt">
            <p>
                Jetzt ist der ideale Schnittzeitraum, wenn Ihr Apfelbaum starktriebig ist (25-50 cm Neutrieb).
                Warten Sie bei kürzeren Neutrieben bis zur nächsten Vegetationsruhe oder zum nächsten Blütenstand.
            </p>
            <button data-target="techniken">So wird geschnitten</button>
        </div>

        <div class="result hidden" id="result-alt-fall">
            <p>
                Jetzt ist der ideale Schnittzeitraum, wenn Ihr Apfelbaum sehr starktriebig ist (50-100 cm Neutrieb).
                Bei kürzeren Neutrieben warten Sie bis zur nächsten Vegetationsruhe, zum Blütenstand oder Blattstand.
            </p>
            <button data-target="techniken">So wird geschnitten</button>
        </div>

		<div class="info hidden" id="techniken">
			<h2>Haupt-Schnitttechniken</h2>
			<p>Der Baum wird von oben/innen nach unten/außen geschnitten!</p>
			<h3>Ableiten</h3>
			<p>Da mit wenigen Ausnahmen beim Altbaumschnitt keine neuen Äste gezogen werden, wird fast nur mit der Methode „Ableiten“ gearbeitet. Mit dem "Ableiten oder Umleiten auf einen Trieb oder Ast" bestimmt man, welche Triebe nicht mehr weiterwachsen, sondern Fruchtholz hervorbringen sollen. Hierbei wird der Ast kurz oberhalb des ausgewählten abgehenden Seitentriebs abgeschnitten.</p>
			<h3>Anschneiden</h3>
			<p>Eine Besonderheit im Altbaumschnitt ist das „Anschneiden“ zu schwacher, aber gewünschter Astpartien, besonders bei Stammverlängerungen. Durch diese Förderung soll verhindert werden, dass benachbarte Äste die Führung übernehmen und die Stammverlängerung überholen. Hierfür werden die Astpartien auf Blattknospe angeschnitten (d.h. der betroffene Ast wird ca. 1 cm oberhalb dieser Blattknospe eingekürzt) und die Blütenknospen entfernt, damit die Kraft in den Neutrieb und nicht in die Frucht geht.</p>
		</div>

        <button class="back-button hidden" id="back-button">Zurück</button>
    </div>
	</>;

export default dicision_tree;
