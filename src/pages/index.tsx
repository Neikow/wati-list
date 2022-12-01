import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from '../components/navbar';
import { Link } from 'gatsby';

import '../index.scss';

const presStyle = {
  'margin': '10%',
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'text-align': 'center',
  'color': '#c1c1c1',
  'font-family': 'Montserrat'
};
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <main>
        <div style={presStyle} id='presentation'>
          <p>Parce que les années 2010 c'était quand même bien...</p>
          <p>Et si on remettait au goût du jour l'oversize et les
            casquettes Wati B ? J'ai l'honneur de vous présenter la
            Wa'Team qui va se donner à fond pendant ces 14 jours de
            campagnes du ler au 15 décembre (et qui ne dort déjà
            plus depuis des semaines pour être au top et respecter les
            deadlines). </p>
          <p>On provient de plein d'horizons différents, pas tous fan de
            Sexion D'Assaut mais fan de soirées qu'on a pu nous faire
            vivre, On est quand même à Centrale (Méditerranée), la
            vie associative compte aussi. Une grande diversité nous
            constitue et assurera un BDE très équilibré !</p>
          <p>Certains sont investis dans des assos professionnelles (KSI,
            Foceen, la Tribune). Pour d'autres c'est la solidarité qui
            prime (Cheer Up, EP, ISF et son projet international) et il
            ne faudrait surtout pas oublier les athlètes (MSB, MDV,
            Raid), ni les artistes (PXC, TP, orchestre, Massilliades) qui
            donnent vie au projet. D'autres feront tout pour que vous
            passiez des moments conviviaux (Bar'bu, le Chaudron, le
            Tonneau) et seront là pour supporter les événements
            sportifs (Sea'Gullards) ou pour booster la technologie
            centralienne (GInfo, Christopher, Fablab, R2CM).
            À 31, l'équipe est prête comme jamais pour vous faire vivre
            des campagnes incroyables, entre SOS, soirées et activités
            surprises!</p>
          <p>Dans notre viseur : continuer à s'investir jusqu'aux
            prochains mandats!</p>

          <Link className='button' to='/night'>
            Billeterie Soirée
          </Link>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wati List</title>;
