import { Link } from "react-router-dom";
import "../styles/MainMenu.css";

function MainMenu() {
  return (
    <div className="main-menu">
      <header className="header-nav-links">
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="worker-list">Workers</Link>
            </li>
            <li>
              <Link to="market-surveys">Market Surveys</Link>
            </li>
            <li>
              <Link to="inventory">Inventory</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section class="presentation">
        <p className="presentation-text">
          "Business management app" is a web tool designed to manage integrally
          a business.<br></br>
          <br></br> En un lugar de la Mancha, de cuyo nombre no quiero
          acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en
          astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de
          algo más vaca que carnero, salpicón las más noches, duelos y
          quebrantos los sábados, lantejas los viernes, algún palomino de
          añadidura los domingos, consumían las tres partes de su hacienda. El
          resto della concluían sayo de velarte, calzas de velludo para las
          fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se
          honraba con su vellorí de lo más fino. Tenía en su casa una ama que
          pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y
          un mozo de campo y plaza, que así ensillaba el rocín como tomaba la
          podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años;
          era de complexión recia, seco de carnes, enjuto de rostro, gran
          madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre
          de Quijada, o Quesada, que en esto hay alguna diferencia en los
          autores que deste caso escriben; aunque por conjeturas verosímiles se
          deja entender que se llamaba Quijana. Pero esto importa poco a nuestro
          cuento: basta que en la narración dél no se salga un punto de la
          verdad. Es, pues, de saber que este sobredicho hidalgo, los ratos que
          estaba ocioso, que eran los más del año, se daba a leer libros de
          caballerías, con tanta afición y gusto, que olvidó casi de todo punto
          el ejercicio de la caza, y aun la administración de su hacienda; y
          llegó a tanto su curiosidad y desatino en esto, que vendió muchas
          hanegas de tierra de sembradura para comprar libros de caballerías en
          que leer, y así, llevó a su casa todos cuantos pudo haber dellos; y de
          todos, ningunos le parecían tan bien como los que compuso el famoso
          Feliciano de Silva; porque la claridad de su prosa y aquellas
          entricadas razones suyas le parecían de perlas, y más cuando llegaba a
          leer aquellos requiebros y cartas de desafíos, donde en muchas partes
          hallaba escrito: «La razón de la sinrazón que a mi razón se hace, de
          tal manera mi razón enflaquece, que con razón me quejo de la vuestra
          fermosura». Y también cuando leía: «... los altos cielos que de
          vuestra divinidad divinamente con las estrellas os fortifican, y os
          hacen merecedora del merecimiento que merece la vuestra grandeza». Con
          estas razones perdía el pobre caballero el juicio, y desvelábase por
          entenderlas y desentrañarles el sentido, que no se lo sacara ni las
          entendiera el mesmo Aristóteles, si resucitara para sólo ello. No
          estaba muy bien con las heridas que don Belianís daba y recebía,
          porque se imaginaba que, por grandes maestros que le hubiesen curado,
          no dejaría de tener el rostro y todo el cuerpo lleno de cicatrices y
          señales. Pero, con todo, alababa en su autor aquel acabar su libro con
          la promesa de aquella inacabable aventura, y muchas veces le vino
          deseo de tomar la pluma y dalle fin al pie de la letra, como allí se
          promete; y sin duda alguna lo hiciera, y aun saliera con ello, si
          otros mayores y continuos pensamientos no se lo estorbaran. Tuvo
          muchas veces competencia con el cura de su lugar (que era hombre
          docto, graduado en Sigüenza), sobre cuál había sido mejor caballero:
          Palmerín de Ingalaterra, o Amadís de Gaula; mas maese Nicolás, barbero
          del mismo pueblo, decía que ninguno llegaba al Caballero del Febo, y
          que si alguno se le podía comparar, era don Galaor, hermano de Amadís
          de Gaula, porque tenía muy acomodada condición para todo; que no era
          caballero melindroso, ni tan llorón como su hermano, y que en lo de la
          valentía no le iba en zaga. En resolución, él se enfrascó tanto en su
          lectura, que se le pasaban las noches leyendo de claro en claro, y los
          días de turbio en turbio; y así, del poco dormir y del mucho leer se
          le secó el celebro de manera, que vino a perder el juicio. Llenósele
          la fantasía de todo aquello que leía en los libros, así de
          encantamentos como de pendencias, batallas, desafíos, heridas,
          requiebros, amores, tormentas y disparates imposibles; y asentósele de
          tal modo en la imaginación que era verdad toda aquella máquina de
          aquellas soñadas invenciones que leía, que para él no había otra
          historia más cierta en el mundo. Decía él que el Cid Ruy Díaz había
          sido muy buen caballero; pero que no tenía que ver con el Caballero de
          la Ardiente Espada, que de sólo un revés había partido por medio dos
          fieros y descomunales gigantes. Mejor estaba con Bernardo del Carpio,
          porque en Roncesvalles había muerto a Roldán el encantado, valiéndose
          de la industria de Hércules, cuando ahogó a Anteo, el hijo de la
          Tierra, entre los brazos. Decía mucho bien del gigante Morgante,
          porque, con ser de aquella generación gigantea, que todos son
          soberbios y descomedidos, él solo era afable y bien criado. Pero,
          sobre todos, estaba bien con Reinaldos de Montalbán, y más cuando le
          veía salir de su castillo y robar cuantos topaba, y cuando en allende
          robó aquel ídolo de Mahoma que era todo de oro, según dice su
          historia. Diera él, por dar una mano de coces al traidor de Galalón,
          al ama que tenía, y aun a su sobrina de añadidura. En efeto, rematado
          ya su juicio, vino a dar en el más extraño pensamiento que jamás dio
          loco en el mundo; y fue que le pareció convenible y necesario, así
          para el aumento de su honra como para el servicio de su república,
          hacerse caballero andante, y irse por todo el mundo con sus armas y
          caballo a buscar las aventuras y a ejercitarse en todo aquello que él
          había leído que los caballeros andantes se ejercitaban, deshaciendo
          todo género de agravio, y poniéndose en ocasiones y peligros donde,
          acabándolos, cobrase eterno nombre y fama. Imaginábase el pobre ya
          coronado por el valor de su brazo, por lo menos, del imperio de
          Trapisonda; y así, con estos tan agradables pensamientos, llevado del
          extraño gusto que en ellos sentía, se dio priesa a poner en efeto lo
          que deseaba. Y lo primero que hizo fue limpiar unas armas que habían
          sido de sus bisabuelos, que, tomadas de orín y llenas de moho, luengos
          siglos había que estaban puestas y olvidadas en un rincón. Limpiólas y
          aderezólas lo mejor que pudo, pero vio que tenían una gran falta, y
          era que no tenían celada de encaje, sino morrión simple; mas a esto
          suplió su industria, porque de cartones hizo un modo de media celada,
          que, encajada con el morrión, hacían una apariencia de celada entera.
          Es verdad que para probar si era fuerte y podía estar al riesgo de una
          cuchillada, sacó su espada y le dio dos golpes, y con el primero y en
          un punto deshizo lo que había hecho en una semana; y no dejó de
          parecerle mal la facilidad con que la había hecho pedazos, y, por
          asegurarse deste peligro, la tornó a hacer de nuevo, poniéndole unas
          barras de hierro por de dentro, de tal manera, que él quedó satisfecho
          de su fortaleza y, sin querer hacer nueva experiencia della, la diputó
          y tuvo por celada finísima de encaje.
        </p>
      </section>
    </div>
  );
}

export default MainMenu;
