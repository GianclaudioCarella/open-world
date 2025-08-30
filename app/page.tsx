import Link from "next/link";
import "./css/home.css";

export default function Home() {
  return (
    <div>
      <header style={{padding: '20px 0', textAlign: 'center'}}>
        <h1>Open World &gt;&gt; Serviços especializado na área de comércio exterior</h1>
        <nav style={{margin: '20px 0'}}>
          <Link href="/" className="home" style={{marginRight: 16}}>Página inicial</Link>
          <Link href="/sobre" style={{marginRight: 16}}>Sobre a Open World</Link>
          <Link href="/servicos" style={{marginRight: 16}}>Serviços</Link>
          <Link href="/links" style={{marginRight: 16}}>Links</Link>
          <Link href="/chat">Chat</Link>
        </nav>
      </header>
      <div className="banner"></div>
      <section style={{maxWidth: 900, margin: '0 auto'}}>
        <article style={{textAlign: 'center', marginBottom: 32}}>
          <h2>Confiança, palavra chave em comércio exterior</h2>
          <p>Parceria com os melhores terminais e transportadoras, além de um despacho aduaneiro preciso e totalmente relatado ao cliente</p>
        </article>
        <article id="box" style={{display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{flex: '1 1 250px', minWidth: 250, maxWidth: 300, background: '#fafafa', padding: 16, borderRadius: 8, textAlign: 'center'}}>
            <Link href="/sobre" style={{textDecoration: 'none', color: 'inherit'}}>
              <h4>Mais de 10 anos de experiência</h4>
              <span>Experiência e facilidade juntos com a sua Importação ou Exportação.</span>
            </Link>
          </div>
          <div style={{flex: '1 1 250px', minWidth: 250, maxWidth: 300, background: '#fafafa', padding: 16, borderRadius: 8, textAlign: 'center'}}>
            <Link href="/servicos" style={{textDecoration: 'none', color: 'inherit'}}>
              <h4>Desembaraço aduaneiro</h4>
              <span>Toda a assessoria no seu despacho aduaneiro aéreos, marítimos e rodoviários.</span>
            </Link>
          </div>
          <div style={{flex: '1 1 250px', minWidth: 250, maxWidth: 300, background: '#fafafa', padding: 16, borderRadius: 8, textAlign: 'center'}}>
            <Link href="/links" style={{textDecoration: 'none', color: 'inherit'}}>
              <h4>Acompanhamento online</h4>
              <span>Com a OpenWorld você pode acompanhar os seus processos de perto pelo WhatsApp.</span>
            </Link>
          </div>
        </article>
      </section>
      <footer style={{marginTop: 48, textAlign: 'center', padding: 24, background: '#f5f5f5'}}>
        <p>Todos os direitos reservados - Open World 2025</p>
        <a href="http://www.quedesign.com.br/" target="_blank" rel="noopener noreferrer" title="Desenvolvimento de websites">@quedesign</a>
      </footer>
    </div>
  );
}
