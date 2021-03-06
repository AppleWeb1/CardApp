import React, { useContext } from "react";
import Link, { ClientOnlyLink, LinkButton } from "./link";

import { ChangeThemeButton } from "./themes/theme-context";

export const Main = () => (
  <>
    Software engineer and artist in Colorado. Data Science,{" "}
    <Link name="ddg"><nobr>DuckDuckGo</nobr></Link>. Founder,{" "}
    <Link name="disconnect">The Disconnect</Link>. Most recent project:{" "}
    <Link name="perf-land">Perf Land</Link>. <Link name="log">[web log]</Link>{" "}
    <ClientOnlyLink name="email">[email]</ClientOnlyLink>{" "}
    <ChangeThemeButton />
  </>
);

export const Make = () => (
  <>
    <b>2020</b> <Link name="perf-land">Perf Land</Link> <b>2019</b>{" "}
    <Link name="disconnect-3">Disconnect #3</Link> <b>2018</b>{" "}
    <Link name="elements">Elements</Link>{" "}
    <Link name="disconnect-2">Disconnect #2</Link>{" "}
    <Link name="disconnect-1">Disconnect #1</Link> <b>2017</b>{" "}
    <Link name="offline-only">Offline Only</Link>{" "}
    <Link name="travels">Travels</Link> <b>2016</b>{" "}
    <Link name="tessellate">Tessellate</Link>{" "}
    <Link name="skycoins">Skycoins</Link> <b>pre-2016</b>{" "}
    <Link name="shipwrecked">Shipwrecked</Link>{" "}
    <Link name="enchiridion">Enchiridion</Link>
  </>
);

export const Talk = () => (
  <>
    <b>Now</b> <Link name="log">log</Link> <b>2020</b>{" "}
    <Link name="venturi">Venturi Interview</Link> <b>2019</b>{" "}
    <Link name="debugging-talk">Debugging</Link> <b>2018</b>{" "}
    <Link name="me-convention">SXSW me Convention</Link>{" "}
    <Link name="dinojs">DinosaurJS</Link> <Link name="cjr">CJR</Link>{" "}
    <Link name="lifehacker">Lifehacker</Link>{" "}
    <Link name="nautilus">Nautilus</Link> <b>2017</b>{" "}
    <Link name="offline-talk">Offline websites</Link>{" "}
    <Link name="vice">Vice</Link> <Link name="le-monde">Le Monde</Link>{" "}
    <Link name="the-next-web">The Next Web</Link> <Link name="cbc">CBC</Link>
  </>
);

export const Work = () => (
  <>
    <b>Current:</b> Director, Data Science, <Link name="ddg"><nobr>DuckDuckGo</nobr></Link>{" "}
    <b>Past:</b> VP Engineering, <Link name="formidable">Formidable</Link>.
    Adjunct, <Link name="u-denver">U of Denver</Link>. Engineer,
    Jumpshell. Data scientist, <Link name="autotegrity">Autotegrity</Link>.
    Researcher, <Link name="ebm">MIT EBM Lab</Link>. Engineer,{" "}
    <Link name="ni">NI</Link>. Master???s Computational Engineering, MIT,{" "}
    <Link name="thesis">numerical simulation of environmental impact</Link>. BS
    Mechanical Engineering, U of Nebraska.
  </>
);
