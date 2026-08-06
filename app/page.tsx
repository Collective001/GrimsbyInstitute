const volumes = [
  {
    roman: "I",
    title: "COMPOUND",
    years: "1869-1870",
    place: "East Ward Annex, Grimsby Institute",
    shelf: "GIEM/H31/I",
    condition: "Complete save for a removed gathering after fol. 42",
    plate: "compound",
    entries: [
      ["17 February 1869", "Subject H-31 tolerated the ordinary glass, the brass meter, and the covered basin without appreciable complaint. The leftward pulse, if provisionally accepted as pulse, remained regular under Porter's count."],
      ["2 May 1870", "The compound has proved to be an agreement among instruments rather than a property of H-31. I have therefore repeated the morning series with the window curtained, the assistant repositioned, and the word compound withheld from the room."],
      ["undated, filed after June 1870", "Appendix C would clarify the departure, but Appendix C is not to be consulted until the reader has first satisfied himself that departure occurred."],
    ],
    note: "Archivist note, 1934: Appendix C has not been located. The string impression in the gutter suggests deliberate removal before accession.",
  },
  {
    roman: "II",
    title: "BASELINE",
    years: "1871",
    place: "Reading Room B and the disused weighing corridor",
    shelf: "GIEM/H31/II",
    condition: "Two leaves copied from a damaged fair hand",
    plate: "baseline",
    entries: [
      ["4 January 1871", "A baseline is not the beginning. It is the first error granted furniture. I record this not as criticism of the Committee, but as a precaution against gratitude."],
      ["19 March 1871", "H-31 was not present in the weighing corridor. The corridor was consequently measured. Its length exceeded the plan by seven inches when approached from the south and agreed precisely when approached by Porter."],
      ["28 October 1871", "The escaped condition cannot be described without borrowing the assumptions that made escape possible. I have sealed the page until a less confident vocabulary presents itself."],
    ],
    note: "Committee minute: The room named Weighing Corridor does not appear in the 1870 plan. It appears in the 1868 plan, erased.",
  },
  {
    roman: "III",
    title: "SEA",
    years: "1872-1875",
    place: "Hull, Whitby, packet routes, and unnamed slips",
    shelf: "GIEM/H31/III",
    condition: "Salt marking; charts mounted in reverse order",
    plate: "sea",
    entries: [
      ["9 March 1872", "The sailors deny seeing it and are offended by my gratitude. I record only that three men looked at the same empty portion of deck and then made three different repairs to their coats."],
      ["24 August 1874", "Sea observation corrects the Institute's worst habit. Walls persuade the observer that containment and comprehension are relations. The horizon is the better instrument. It refuses to assist."],
      ["11 January 1875", "I have ceased asking whether H-31 is before or behind me. Both formulations assume a line, and the line has performed poorly under scrutiny."],
    ],
    note: "Expenses approved provided future invoices distinguish fare, freight, rope, and rope later found unnecessary.",
  },
  {
    roman: "IV",
    title: "POLYMER",
    years: "1876-1877",
    place: "Manchester manufactories and temporary laboratory rooms",
    shelf: "GIEM/H31/IV",
    condition: "Industrial soot at fore edge; one report redacted twice",
    plate: "polymer",
    entries: [
      ["6 June 1876", "The manufacturers understand mixture but not relation. They are content when substances bind. I am concerned with the conditions under which a binding persuades the observer that two things have become one."],
      ["12 December 1876", "H-31 was not recovered from the vat. The vat was emptied, dried, weighed, reassembled, and asked nothing further. I am not satisfied, though each step was successful."],
      ["3 April 1877", "Procedure P requires the observer to name every surface before touching none of them. The foreman laughed until his sleeve repeated my measurements."],
    ],
    note: "Procedure P is cited by later volumes as if commonly understood. No standalone description survives.",
  },
  {
    roman: "V",
    title: "PARIS",
    years: "1877-1881",
    place: "Paris hospitals, drains, lecture rooms, and private stair",
    shelf: "GIEM/H31/V",
    condition: "French inserts retained; one map misdated 1880/1878",
    plate: "paris",
    entries: [
      ["3 April 1877", "At the Salpetriere I found a method beautifully unsuited to my purpose. The demonstrator fixed the patient, the lamp, the audience, and finally his own conclusion."],
      ["16 October 1879", "The Paris map is accurate until used. I have marked the streets where H-31 was not present, then the streets where absence failed to remain stable."],
      ["5 February 1881", "Readers familiar with the third Parisian precaution will understand why the mirror was wrapped after noon but before the bell."],
    ],
    note: "Later pencil, hand unknown: The third Parisian precaution is mentioned nine times. It is never described.",
  },
  {
    roman: "VI",
    title: "WORRY",
    years: "1882-1884",
    place: "Geneva rooms, alpine clinics, and transit ledgers",
    shelf: "GIEM/H31/VI",
    condition: "Censor's ribbon intact; several pages initialled by no committee member",
    plate: "worry",
    entries: [
      ["12 June 1882", "I now distrust first sightings, second confirmations, and any conclusion that improves the mood of the room."],
      ["28 November 1883", "H-31 was not detected in the corridor. I therefore examined the corridor, the meaning of detection, my appetite, and the clerk's insistence that no corridor had been assigned to us."],
      ["4 April 1884", "Worry is not fear. It is the correct maintenance of an instrument known to be easily pleased."],
    ],
    note: "Subcommittee on Ordinary Safety: The report is acceptable if read without emphasis.",
  },
  {
    roman: "VII",
    title: "REVITALIZE",
    years: "1885-1888",
    place: "Bohemian sanatoria, Danube stations, and recovery rooms",
    shelf: "GIEM/H31/VII",
    condition: "Complete; several pages copied from destroyed originals",
    plate: "revitalize",
    entries: [
      ["19 May 1886", "The sanatorium physicians speak of recovery as a return. This is comforting and therefore suspect."],
      ["7 September 1887", "I revitalized the apparatus by removing the indicator, the scale, the hinge, and finally the apparatus. What remained produced the most consistent readings yet obtained."],
      ["31 January 1888", "The assistant asked what we are reviving. I answered too quickly. I have crossed out the answer."],
    ],
    note: "Invoice dispute unresolved. The crate labelled Apparatus, revised was found empty in 1902 and retained as evidence.",
  },
  {
    roman: "VIII",
    title: "DOUBT",
    years: "1889-1890",
    place: "Atlantic crossing, Halifax, and elevated observatories",
    shelf: "GIEM/H31/VIII",
    condition: "Meteorological inserts catalogued separately",
    plate: "doubt",
    entries: [
      ["14 July 1889", "Clouds offer the courtesy of changing while one watches. They do not pretend the observer has caused the alteration."],
      ["2 December 1889", "At Halifax the barometer fell before I entered the room, during my stay, and again after I departed. Three falls, one instrument, no useful accusation."],
      ["8 August 1890", "The doubt protocol requires the observer to record every boundary he invents, the minute he invented it, and the moment at which the boundary became embarrassing."],
    ],
    note: "Map Room copy references Stair B. No Stair B appears in any surviving plan of the Halifax rooms.",
  },
  {
    roman: "IX",
    title: "RETURN TO BASELINE",
    years: "1891",
    place: "Boston receiving rooms and a hired lecture chamber",
    shelf: "GIEM/H31/IX",
    condition: "Final entry dated 27 October 1891",
    plate: "return",
    entries: [
      ["3 September 1891", "I have returned not to the Institute but to the first error that wore its coat."],
      ["18 October 1891", "The city assists by arranging itself in grids and then betraying them at the alleys. I have marked the station, the dispensary, the private stair, the room below the room, and the door that opens only when approached from the wrong appointment."],
      ["27 October 1891", "The observers are invited. I have placed the sequence in its proper order and removed all explanations that might encourage them to feel prepared. Four days remain."],
    ],
    note: "This is the final extant entry. The demonstration register begins on 31 October but contains no minutes.",
  },
];

const observationSequence = [
  "BASELINE",
  "COMPOUND",
  "SEA",
  "POLYMER",
  "PARIS",
  "WORRY",
  "REVITALIZE",
  "DOUBT",
  "RETURN TO BASELINE",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="seal" href="#top" aria-label="The Grimsby Institute home">
          GIEM
        </a>
        <nav aria-label="Primary navigation">
          <a href="#institute">The Institute</a>
          <a href="#archive">The Archive</a>
          <a href="#demonstration">Public Demonstrations</a>
          <a href="#reading-room">Reading Room</a>
          <a href="#registry">Registry</a>
        </nav>
      </header>

      <section className="study" id="top">
        <div className="lamp" aria-hidden="true" />
        <div className="study-copy">
          <p className="eyebrow">Catalogue Room B / Evening Access</p>
          <h1>The Grimsby Institute of Experimental Medicine</h1>
          <p>
            A private medical archive preserving the journals, procedural notes,
            field maps, and observation registers of Dr. Elias Grimsby.
          </p>
          <a className="primary-link" href="#archive">
            Open the journal sequence
          </a>
        </div>
        <aside className="desk-card">
          <div className="seal-mark" aria-hidden="true">
            GIEM
          </div>
          <p>Current accession</p>
          <strong>H-31 Journal Sequence</strong>
          <span>Nine bound volumes, 1869-1891</span>
          <span>Handling: dry hands, brass weights, no prepared conclusions</span>
        </aside>
      </section>

      <figure className="frontispiece" aria-labelledby="frontispiece-caption">
        <img
          src="/og.png"
          alt="Archive table with H-31 journals, catalogue slips, redacted report, measuring instrument, and route map."
        />
        <figcaption id="frontispiece-caption">
          Frontispiece from the Institute's late catalogue impression, retained
          with the H-31 journals.
        </figcaption>
      </figure>

      <section className="institute" id="institute">
        <div>
          <p className="section-label">The Institute</p>
          <h2>A learned society most comfortable in the margins.</h2>
        </div>
        <div className="paper-panel">
          <p>
            Founded in 1862, the Institute was established to preserve
            experimental medical records judged too provisional for ordinary
            publication and too carefully witnessed to discard. Its work has
            always been custodial. The Institute does not interpret Dr.
            Grimsby's journals for the reader. It supplies a table, a lamp, and
            the original order of the papers.
          </p>
          <p>
            The H-31 sequence remains the most requested collection. It begins
            as a clinical record and becomes a travel narrative, then something
            more difficult to classify without improving it falsely.
          </p>
        </div>
      </section>

      <section className="archive" id="archive">
        <div className="section-heading">
          <p className="section-label">The Archive</p>
          <h2>Journals of Dr. Elias Grimsby</h2>
          <p>
            Titles are Dr. Grimsby's own. The Institute has preserved missing
            leaves, contradictory dates, and unexplained procedures as part of
            the record rather than correcting them into confidence.
          </p>
        </div>

        <div className="volume-list">
          {volumes.map((volume, index) => (
            <article className="volume" key={volume.title}>
              <div className={`plate ${volume.plate}`} aria-hidden="true">
                <span>{volume.place}</span>
              </div>
              <div className="volume-body">
                <div className="volume-kicker">
                  <span>Volume {volume.roman}</span>
                  <span>{volume.years}</span>
                </div>
                <h3>{volume.title}</h3>
                <dl className="metadata">
                  <div>
                    <dt>Primary location</dt>
                    <dd>{volume.place}</dd>
                  </div>
                  <div>
                    <dt>Shelfmark</dt>
                    <dd>{volume.shelf}</dd>
                  </div>
                  <div>
                    <dt>Condition</dt>
                    <dd>{volume.condition}</dd>
                  </div>
                </dl>

                <div className="entries">
                  {volume.entries.map(([date, text]) => (
                    <blockquote key={date}>
                      <time>{date}</time>
                      <p>{text}</p>
                    </blockquote>
                  ))}
                </div>

                <details>
                  <summary>Archivist note and related material</summary>
                  <p>{volume.note}</p>
                  <p className="crossref">
                    Cross-reference: appendix {index + 2}, map case{" "}
                    {String.fromCharCode(66 + index)}, and procedure sheet{" "}
                    {index % 3 === 0 ? "withheld" : "unavailable"}.
                  </p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="demonstration" id="demonstration">
        <div className="section-heading">
          <p className="section-label">Public Demonstrations</p>
          <h2>Notice of invited observation</h2>
          <p>
            The Institute will receive invited observers for a formal
            presentation of the Grimsby sequence. Attendance is by written
            invitation only.
          </p>
        </div>
        <div className="notice">
          <ol>
            {observationSequence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="reading-room" id="reading-room">
        <div>
          <p className="section-label">Reading Room</p>
          <h2>Conditions for consultation</h2>
        </div>
        <div className="paper-panel">
          <p>
            Readers are asked to proceed in sequence and to avoid summarising a
            volume before opening the next. Personal theories may be recorded on
            the loose cream slips provided, but must not be inserted into the
            bindings.
          </p>
          <p>
            The Institute cannot confirm private reconstructions of H-31 without
            the corresponding absence slips.
          </p>
        </div>
      </section>

      <section className="registry" id="registry">
        <p className="section-label">Registry</p>
        <p>
          GIEM/S/1862 / Catalogue Room B / H-31 sequence retained under the
          original brass weights. Accessions reviewed without interpretive
          correction.
        </p>
      </section>
    </main>
  );
}
