import { PaletteProvider } from './context/PaletteContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContrastCards from './components/ContrastCards';
import TypographyDemo from './components/demos/TypographyDemo';
import NavigationDemo from './components/demos/NavigationDemo';
import CardsDemo from './components/demos/CardsDemo';
import FormsDemo from './components/demos/FormsDemo';
import AlertsDemo from './components/demos/AlertsDemo';
import TablesDemo from './components/demos/TablesDemo';
import styles from './App.module.css';

const SECTIONS = [
  { id: 'tipografia', title: 'Tipografía', comp: TypographyDemo },
  { id: 'navegacion', title: 'Navegación', comp: NavigationDemo },
  { id: 'cards', title: 'Tarjetas', comp: CardsDemo },
  { id: 'formularios', title: 'Formularios', comp: FormsDemo },
  { id: 'alertas', title: 'Alertas y etiquetas', comp: AlertsDemo },
  { id: 'tablas', title: 'Tabla de datos', comp: TablesDemo },
];

function AppContent() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.main}>
          <ContrastCards />

          {SECTIONS.map(s => (
            <section key={s.id} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.title}</h2>
              <div className={styles.sectionBody}>
                <s.comp />
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <PaletteProvider>
      <AppContent />
    </PaletteProvider>
  );
}
