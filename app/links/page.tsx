import Link from "next/link";
import Image from "next/image";

export default function LinksPage() {
  return (
    <div>
      <header style={{ padding: "20px 0", textAlign: "center" }}>
        <h1>Open World &gt;&gt; Serviços especializado na área de comércio exterior</h1>
        <nav style={{ margin: "20px 0" }}>
          <Link href="/" className="home" style={{ marginRight: 16 }}>
            Página inicial
          </Link>
          <Link href="/sobre" style={{ marginRight: 16 }}>
            Sobre a Open World
          </Link>
          <Link href="/servicos" style={{ marginRight: 16 }}>
            Serviços
          </Link>
          <Link href="/links" style={{marginRight: 16}}>Links</Link>
          <Link href="/chat">Chat</Link>
        </nav>
      </header>
      <nav className="mobile">
        <Image src="/open-world-mobile.png" width={120} height={60} alt="Open World" />
      </nav>
      <div className="banner-internas">
        <p>Banner interno</p>
      </div>
      <section>
        <article>
          <h2>Links - comércio exterior</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <ul className="lista">
                <li>
                  <a href="http://www.bcb.gov.br/" target="_blank" rel="noopener noreferrer">Banco Central do Brasil</a>
                </li>
                <li>
                  <a href="http://www.marinhamercante.com.br/" target="_blank" rel="noopener noreferrer">Marinha Mercante</a>
                </li>
                <li>
                  <a href="http://www.fazenda.gov.br/" target="_blank" rel="noopener noreferrer">Ministério da Fazenda</a>
                </li>
                <li>
                  <a href="http://www.transportes.gov.br/" target="_blank" rel="noopener noreferrer">Ministério dos Transportes</a>
                </li>
                <li>
                  <a href="http://www.mdic.gov.br/" target="_blank" rel="noopener noreferrer">Ministério da Indústria e do Comércio</a>
                </li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <ul className="lista">
                <li>
                  <a href="http://www.agricultura.gov.br/" target="_blank" rel="noopener noreferrer">Ministério da Agricultura</a>
                </li>
                <li>
                  <a href="http://www.saude.gov.br/" target="_blank" rel="noopener noreferrer">Ministério da Saúde</a>
                </li>
                <li>
                  <a href="http://www.portodesantos.com.br/" target="_blank" rel="noopener noreferrer">Porto de Santos</a>
                </li>
                <li>
                  <a href="http://www.fazenda.sp.gov.br/" target="_blank" rel="noopener noreferrer">Secretaria da Fazenda do Estado de São Paulo</a>
                </li>
                <li>
                  <a href="http://www.receita.fazenda.gov.br/" target="_blank" rel="noopener noreferrer">Secretaria da Receita Federal</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <footer style={{ textAlign: "center", padding: 24, background: "#eee", marginTop: 32 }}>
        <p>Todos os direitos reservados - Open World 2025</p>
        <a href="http://www.quedesign.com.br/" title="Desenvolvimento de websites" target="_blank" rel="noopener noreferrer">@quedesign</a>
      </footer>
    </div>
  );
}
