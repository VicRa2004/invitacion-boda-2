import ScrollReveal from "./ScrollReveal";

export default function StoryAndParents() {
  return (
    <>
      <ScrollReveal delay={0.2}>
        <p className="quote">
          “El amor es paciente y muestra compresión. El amor no tiene celos, no
          aparenta ni se infla. No actúa con bajeza ni busca su propio interés,
          no se deja llevar por la ira y olvida lo malo. No se alegra de lo
          injusto si no que se goza en la verdad. Lo cree todo, lo espera todo y
          soporta todo.”
        </p>
        <span className="bible-verse">- 1ra de Corintios 13, 4-6 -</span>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="parents-names mt-4">
          <p className="intro-text">
            Con la bendición de Dios y nuestros padres:
          </p>
          <div className="parents-grid">
            <div>
              <p>Homero Valencia Hernández</p>
              <p>Esperanza García Cruz</p>
            </div>
            <div>
              <p>Isabel Aguilar Valencia</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
