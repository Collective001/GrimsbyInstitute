const volumes = [
  {
    roman: "I",
    title: "COMPOUND",
    years: "1869-1871",
    place: "Grimsby Institute, East Ward Annex",
    shelf: "GIEM/H31/I",
    status: "Complete with missing leaf after fol. 42",
    image: "compound",
    entries: [
      {
        date: "17 February 1869",
        text: "Subject H-31 presented no resistance to ordinary measures of attention. The leftward pulse, if that term may be admitted provisionally, answered to the brass meter with gratifying regularity. I have instructed Porter to continue the morning observations and to avoid naming the second vessel until its necessity has been demonstrated.",
      },
      {
        date: "2 May 1870",
        text: "Our original compound was never a compound. It was a convenient agreement among instruments. I have therefore begun again, this time with the window covered, the floor measured, and the assistant placed where his expectations cannot easily enter the result.",
      },
      {
        date: "undated, filed between June and July 1871",
        text: "Appendix C would clarify the matter of departure, but Appendix C is not to be consulted until the reader has first satisfied himself that departure occurred. This is not circular. It is only inconvenient.",
      },
    ],
    marginalia:
      "Archivist note, 1934: No Appendix C has been located. The binding suggests a removal before accession, not later loss.",
  },
  {
    roman: "II",
    title: "SEA",
    years: "1872-1876",
    place: "Hull, Whitby, North Sea packet routes",
    shelf: "GIEM/H31/II",
    status: "Water damage; two charts reversed",
    image: "sea",
    entries: [
      {
        date: "9 March 1872",
        text: "The sailors deny seeing it and are offended by my gratitude. I record only that three men looked at the same empty portion of deck and then made three different repairs to their coats.",
      },
      {
        date: "24 August 1874",
        text: "Sea observation corrects the Institute's worst habit: walls persuade the observer that containment and comprehension are cousins. The horizon is the better instrument. It refuses to help.",
      },
      {
        date: "11 January 1876",
        text: "I have ceased to ask whether H-31 is before or behind me. Both formulations assume a line, and the line has performed poorly under scrutiny.",
      },
    ],
    marginalia:
      "Committee minute, 1877: Dr. Grimsby's travel expenses were approved, provided future invoices distinguish fare, freight, and 'necessary rope.'",
  },
  {
    roman: "III",
    title: "PARIS",
    years: "1877-1881",
    place: "Paris hospitals, drains, and lecture rooms",
    shelf: "GIEM/H31/III",
    status: "French inserts retained in original order",
    image: "paris",
    entries: [
      {
        date: "3 April 1877",
        text: "At the Salpetriere I found a method beautifully unsuited to my purpose. The demonstrator fixed the patient, the lamp, the audience, and finally his own conclusion. H-31 would not survive such neatness, which may mean only that neatness would not survive H-31.",
      },
      {
        date: "16 October 1879",
        text: "The Paris map is accurate until used. I have marked the streets where H-31 was not present, then the streets where absence failed to remain stable. Dupin says this is superstition. I have invited him to repeat the walk without me.",
      },
      {
        date: "5 February 1881",
        text: "Readers familiar with the third Parisian precaution will understand why the mirror was wrapped after noon but before the bell. Readers unfamiliar with it should not infer that the precaution was optional.",
      },
    ],
    marginalia:
      "Later pencil, hand unknown: The 'third Parisian precaution' is mentioned nine times. It is never described.",
  },
  {
    roman: "IV",
    title: "CAUTION",
    years: "1882-1885",
    place: "Geneva, alpine clinics, transit rooms",
    shelf: "GIEM/H31/IV",
    status: "Redactions authorized by the Subcommittee on Ordinary Safety",
    image: "caution",
    entries: [
      {
        date: "12 June 1882",
        text: "I now distrust first sightings, second confirmations, and any conclusion that improves the mood of the room. The new procedure begins with the observer writing down what would please him most, sealing the page, and then proceeding as though it were a contaminant.",
      },
      {
        date: "28 November 1883",
        text: "H-31 was not detected in the corridor. I therefore examined the corridor, the meaning of detection, my appetite, and the clerk's insistence that no corridor had been assigned to us.",
      },
      {
        date: "4 April 1885",
        text: "Caution is not slowness. It is the refusal to let a successful method become a superstition with furniture.",
      },
    ],
    marginalia:
      "Redacted report R-14 contains only the phrase 'not reproducible under lamps' and five witness signatures.",
  },
  {
    roman: "V",
    title: "REVITALIZE",
    years: "1886-1888",
    place: "Sanatoria of Bohemia and the Danube stations",
    shelf: "GIEM/H31/V",
    status: "Complete; several pages copied from destroyed originals",
    image: "revitalize",
    entries: [
      {
        date: "19 May 1886",
        text: "The sanatorium physicians speak of recovery as a return. This is comforting and therefore suspect. If H-31 recovers, from what position does it return, and who had the discourtesy to name that position health?",
      },
      {
        date: "7 September 1887",
        text: "I revitalized the apparatus by removing the indicator, the scale, the hinge, and finally the apparatus. What remained produced the most consistent readings yet obtained, though I accept that the Committee will dislike the invoice.",
      },
      {
        date: "31 January 1888",
        text: "The assistant asked what we are reviving. I answered too quickly. I have crossed out the answer.",
      },
    ],
    marginalia:
      "Invoice dispute unresolved. The crate labelled 'Apparatus, revised' was found empty in 1902 and retained as evidence.",
  },
  {
    roman: "VI",
    title: "CLOUD",
    years: "1889-1890",
    place: "Atlantic crossing, Halifax, elevated observatories",
    shelf: "GIEM/H31/VI",
    status: "Meteorological inserts catalogued separately",
    image: "cloud",
    entries: [
      {
        date: "14 July 1889",
        text: "Clouds offer the courtesy of changing while one watches. They do not pretend the observer has caused the alteration. I have adopted them as instructors.",
      },
      {
        date: "2 December 1889",
        text: "At Halifax the barometer fell before I entered the room, during my stay, and again after I departed. Three falls, one instrument, no useful accusation.",
      },
      {
        date: "8 August 1890",
        text: "The cloud protocol requires the observer to record every boundary he invents, the minute he invented it, and the moment at which the boundary became embarrassing.",
      },
    ],
    marginalia:
      "Map Room copy references Stair B. No Stair B appears in any surviving plan of the Halifax rooms.",
  },
  {
    roman: "VII",
    title: "RETURN TO BASELINE",
    years: "1891",
    place: "Boston, receiving rooms and hired lecture chamber",
    shelf: "GIEM/H31/VII",
    status: "Ends 27 October 1891",
    image: "baseline",
    entries: [
      {
        date: "3 September 1891",
        text: "I have returned not to the Institute but to the first error that wore its coat. Baseline was never the beginning. It was merely the first measurement we were polite enough to believe.",
      },
      {
        date: "18 October 1891",
        text: "The city assists by arranging itself in grids and then betraying them at the alleys. I have marked the station, the dispensary, the private stair, the room below the room, and the door that opens only when approached from the wrong appointment.",
      },
      {
        date: "27 October 1891",
        text: "The observers are invited. I have placed the sequence in its proper order and removed all explanations that might encourage them to feel prepared. Four days remain. I am almost certain that is the correct number.",
      },
    ],
    marginalia:
      "This is the final extant entry. The demonstration register begins on 31 October but contains no minutes.",
  },
];

const demonstrationSequence = [
  "BASELINE",
  "COMPOUND",
  "SEA",
  "PARIS",
  "CAUTION",
  "REVITALIZE",
  "CLOUD",
  "RETURN TO BASELINE",
];

const personnel = [
  ["Dr. Elias Grimsby", "Physician-observer, 1864-1891"],
  ["Mrs. Ada Porter", "Recorder of instruments and travel receipts"],
  ["L. March, F.R.C.P.", "Chair, Committee for Preservation"],
  ["E. Vale", "Archivist responsible for the H-31 sequence"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="seal" href="#top" aria-label="The Grimsby Institute home">
          GIEM
        </a>
        <nav aria-label="Primary navigation">
          <a href="#history">History</a>
          <a href="#archive">Archive</a>
          <a href="#demonstration">Public Demonstrations</a>
          <a href="#personnel">Personnel</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Established 1862 / Catalogue Room B</p>
          <h1>The Grimsby Institute of Experimental Medicine</h1>
          <p>
            Preserving the journals, observations, correspondence, and
            procedural records of Dr. Elias Grimsby, with particular attention
            to the long investigation catalogued as Subject H-31.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#archive">
              Read the journals
            </a>
            <a className="secondary-link" href="#demonstration">
              Public observation
            </a>
          </div>
        </div>
        <aside className="catalogue-card" aria-label="Current archive notice">
          <p>Current Finding Aid</p>
          <strong>H-31 Journal Sequence</strong>
          <span>Seven thematic volumes, 1869-1891</span>
          <span>Access: supervised reading permitted</span>
        </aside>
      </section>

      <figure className="frontispiece" aria-labelledby="frontispiece-caption">
        <img
          src="/og.png"
          alt="Archive table with H-31 journals, catalogue slips, redacted report, measuring instrument, and route map."
        />
        <figcaption id="frontispiece-caption">
          Catalogue frontispiece prepared for the H-31 journal sequence.
        </figcaption>
      </figure>

      <section className="intro-band" id="history">
        <div>
          <p className="section-label">Brief history</p>
          <h2>An institute built to keep records before it kept opinions.</h2>
        </div>
        <p>
          The Grimsby Institute was founded to preserve experimental medical
          observations that could not yet be reconciled with ordinary practice.
          Its best-known holdings are not administrative papers but the private
          journals of Dr. Elias Grimsby, whose investigation into H-31 began as
          a clinical study and became, by increments, a record of travel,
          revision, and disciplined uncertainty.
        </p>
      </section>

      <section className="archive" id="archive">
        <div className="section-heading">
          <p className="section-label">Archive</p>
          <h2>Journals of Dr. Elias Grimsby</h2>
          <p>
            The Institute preserves the sequence in its thematic arrangement.
            Titles are Dr. Grimsby's own. Explanatory apparatus has been kept
            deliberately narrow where the source material resists summary.
          </p>
        </div>

        <div className="volume-list">
          {volumes.map((volume, index) => (
            <article className="volume" key={volume.title}>
              <div className={`plate ${volume.image}`} aria-hidden="true">
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
                    <dd>{volume.status}</dd>
                  </div>
                </dl>

                <div className="entries">
                  {volume.entries.map((entry) => (
                    <blockquote key={entry.date}>
                      <time>{entry.date}</time>
                      <p>{entry.text}</p>
                    </blockquote>
                  ))}
                </div>

                <details>
                  <summary>Archivist marginalia and related material</summary>
                  <p>{volume.marginalia}</p>
                  <p className="crossref">
                    Cross-reference: Appendix {String.fromCharCode(68 + index)}
                    , map sheet {index + 3}, and witness schedule{" "}
                    {index % 2 === 0 ? "withheld" : "unavailable"}.
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
            invitation only. Observers are asked to arrive with no prepared
            interpretive statement.
          </p>
        </div>
        <div className="notice">
          <div>
            <p className="notice-date">31 October 2026 / Boston</p>
            <h3>Public Observation Register: H-31 Sequence</h3>
          </div>
          <ol>
            {demonstrationSequence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="personnel" id="personnel">
        <div>
          <p className="section-label">Personnel</p>
          <h2>Associated names</h2>
        </div>
        <div className="people-grid">
          {personnel.map(([name, role]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Reading room enquiries</h2>
        </div>
        <address>
          Grimsby Institute of Experimental Medicine
          <br />
          Catalogue Room B, North Registry
          <br />
          Boston, Massachusetts
          <br />
          archive@grimsby-institute.example
        </address>
        <p className="quiet-note">
          The Institute cannot authenticate private copies of the H-31 journals
          without the corresponding absence slips.
        </p>
      </section>
    </main>
  );
}
