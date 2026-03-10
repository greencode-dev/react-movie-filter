# React Movie Filter

Un'applicazione React semplice per filtrare una lista di film in base al genere, con funzionalità bonus per ricerca per titolo e aggiunta di nuovi film.

## 📋 Traccia dell'Esercizio

Crea un nuovo progetto React e implementa un sistema di filtro per una lista di film in base al genere.

**Array dei film iniziale:**

```js
[
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
];
```

**Requisiti:**

- Utilizzare lo stato e `useEffect` per gestire il filtraggio dinamico.
- Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
- Se non viene selezionato alcun genere, devono essere mostrati tutti i film.

**Bonus implementati:**

- Campo di ricerca per filtrare i film anche per titolo.
- Sistema per aggiungere nuovi film alla lista tramite un form.

## 🚀 Caratteristiche

- **Filtro per genere**: Seleziona un genere dalla dropdown per visualizzare solo i film corrispondenti.
- **Ricerca per titolo**: Digita nel campo di ricerca per filtrare i film per titolo (case-insensitive).
- **Aggiunta film**: Usa il form per aggiungere nuovi film alla lista.
- **Interfaccia user-friendly**: Design pulito e responsive con CSS personalizzato.

## 🛠 Tecnologie Utilizzate

- **React**: Framework per la costruzione dell'interfaccia utente.
- **Vite**: Tool di build e sviluppo.
- **JavaScript (ES6+)**: Linguaggio di programmazione.
- **CSS**: Styling personalizzato.

## 📦 Installazione e Avvio

1. **Clona il repository:**

    ```bash
    git clone https://github.com/greencode-dev/react-movie-filter.git
    cd react-movie-filter
    ```

2. **Installa le dipendenze:**

    ```bash
    npm install
    ```

3. **Avvia il server di sviluppo:**

    ```bash
    npm run dev
    ```

4. **Apri il browser** e vai a `http://localhost:5173` (o l'URL mostrata nel terminale).

## 📖 Come Usare

1. **Filtra per genere**: Usa la dropdown "Filtro Film per Genere" per selezionare un genere. Scegli "Tutti" per vedere tutti i film.
2. **Ricerca per titolo**: Digita nel campo "Cerca per titolo..." per filtrare i film in tempo reale.
3. **Aggiungi un film**: Compila il form "Aggiungi un nuovo film" con titolo e genere, poi clicca "Aggiungi Film". Il nuovo film apparirà nella lista.

## 🏗 Struttura del Progetto

```
react-movie-filter/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Componente principale
│   ├── index.css        # Stili CSS
│   ├── main.jsx         # Punto di ingresso React
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributi

Questo è un progetto di esercitazione. Sentiti libero di forkare e migliorare!

## 📄 Licenza

Questo progetto è distribuito sotto la licenza MIT.</content>
<parameter name="filePath">c:\Dev\Boolean\react-movie-filter\README.md
