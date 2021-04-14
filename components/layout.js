import Head from "next/head"; // Header settings
import Link from "next/link"; // Dynamic links

export default function Layout(props) {
  return (
    // Global layout setup
    <div className="layout">
      {/* Header */}
      <Head>
        <link rel="apple-touch-icon" href="/favicon/favicon-rxc.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/favicon-rxc.png"
        />
        <meta name="theme-color" content="#ffffff" />

        <title>RxC QV</title>
        <meta name="title" content="RxC QV" />
        <meta
          name="description"
          content="An easy tool to host a quadratic vote"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quadraticvote.radicalxchange.org/" />
        <meta property="og:title" content="RxC QV" />
        <meta
          property="og:description"
          content="An easy tool to host a quadratic vote"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quadraticvote.radicalxchange.org/" />
        <meta
          property="twitter:title"
          content="RxC QV"
        />
        <meta
          property="twitter:description"
          content="An easy tool to host a quadratic vote"
        />
{/*
        {props.event ? null : (
          <>
            <meta
              property="og:image"
              content="https://quadraticvote.co/meta.png"
            />
            <meta
              property="twitter:image"
              content="https://quadraticvote.co/meta.png"
            />
          </>
        )}

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
*/}
      </Head>

      {/* Page global header */}
      <div className="layout__header">
        <Link href="/">
          <a>
            <img
              src="/logo.svg"
              alt="RadicalxChange logo"
            />
          </a>
        </Link>
      </div>

      {/* Page content */}
      <div className="layout__content">{props.children}</div>

      {/* Page footer */}
      {/*
      <div className="layout__footer">
        <p>
          <a
            href="https://arxiv.org/pdf/1809.06421.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quadratic Funding Paper (PDF)
          </a>{" "}
          by{" "}
          <a
            href="https://twitter.com/vitalikbuterin"
            target="_blank"
            rel="noreferrer noopener"
          >
            @vitalikbuterin
          </a>
          ,{" "}
          <a
            href="https://twitter.com/zhitzig"
            target="_blank"
            rel="noopener noreferrer"
          >
            @zhitzig
          </a>
          ,{" "}
          <a
            href="https://twitter.com/glenweyl"
            target="_blank"
            rel="noopener noreferrer"
          >
            @glenweyl
          </a>
        </p>
        <p>
          This voting platform made with &lt;3 by{" "}
          <a
            href="https://twitter.com/_anishagnihotri"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_anishagnihotri
          </a>{" "}
          &amp;{" "}
          <a
            href="https://twitter.com/owocki"
            target="_blank"
            rel="noopener noreferrer"
          >
            owocki
          </a>
        </p>
        <p>
          Design by{" "}
          <a
            href="http://gitcoin.co/guistf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @guistf
          </a>{" "}
          &amp;{" "}
          <a
            href="http://gitcoin.co/octavian"
            target="_blank"
            rel="noopener noreferrer"
          >
            @octavian
          </a>
        </p>
        <div>
          <a
            href="https://gitcoin.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://s.gitcoin.co/static/v2/images/logo_med_hover.c2969168bf04.gif"
              alt="Gitcoin logo"
            />
          </a>
          <div>
            <a
              href="https://github.com/anish-agnihotri/quadratic-voting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.png" alt="Github logo" />
            </a>
            <a
              href="https://twitter.com/gitcoin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter.png" alt="Twitter logo" />
            </a>
          </div>
        </div>
      </div>
      */}

      {/* Global styling */}
      <style jsx global>{`
        body {
          padding: 0px;
          margin: 0px;
          font-family: "Roboto", sans-serif;
          background-color: #0f0632;
        }
      `}</style>

      {/* Scoped layout styling */}
      <style jsx>{`
        .layout__header {
          height: 65px;
          box-shadow: 0px 2px 10px rgba(151, 164, 175, 0.1);
          padding: 0px 20px;
          width: calc(100% - 40px);
          background-position: center top;
          background-color: #f6f9fc;
        }
        .layout__header > a {
          text-decoration: none;
          transition: 100ms ease-in-out;
        }
        .layout__header > a:hover {
          opacity: 0.8;
        }
        .layout__header > a > img {
          height: 45px;
          margin-top: 6.5px;
        }
        .layout__content {
          min-height: calc(100vh - 125px);
          padding-bottom: 60px;
          background-color: #f6f9fc;
          text-align: center;
        }
        .layout__footer {
          background-position: center top;
          width: calc(100% - 40px);
          padding: 37.5px 20px;
          text-align: center;
          color: #fff;
          border-top: 3px solid #00d182;
        }
        .layout__footer > p {
          margin: 10px auto;
          line-height: 30px;
        }
        .layout__footer > p > a {
          color: #000;
          padding: 1px 3px;
          background-color: #00e996;
          border-radius: 2px;
          font-weight: 500;
          text-decoration: none;
          transition: 100ms ease-in-out;
        }
        .layout__footer > p > a:hover {
          opacity: 0.75;
        }
        .layout__footer > div > a,
        .layout__footer > div > div > a {
          text-decoration: none;
          transition: 100ms ease-in-out;
        }
        .layout__footer > div > a:hover,
        .layout__footer > div > div > a:hover {
          opacity: 0.75;
        }
        .layout__footer > div > a > img {
          height: 50px;
          margin: 10px 0px;
        }
        .layout__footer > div > div > a > img {
          height: 35px;
          filter: invert(100%);
          margin-top: 15px;
          margin-left: 15px;
          margin-right: 15px;
        }
      `}</style>
    </div>
  );
}
