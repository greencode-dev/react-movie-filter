# 📋 Esercizio: React Movie Filter

Ciao studente, oggi lavoreremo su un progetto React chiamato **react-movie-filter**.

---

## 🎯 Obiettivo

Creare un’app che permetta di filtrare dinamicamente una lista di film in base al genere.

Potrai concentrarti sulla **logica** e sulla **gestione dello stato** usando React; lo stile verrà dopo.

---

## 📦 Dati iniziali

Utilizza il seguente array di film come punto di partenza:

```js
const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
];
```

---

## 🛠 Requisiti

1. **Filtro per genere**
    - Mostra i film in base al genere selezionato.
    - Se non viene selezionato alcun genere, visualizza tutti i film.
    - Il filtro deve aggiornarsi dinamicamente quando l’utente sceglie un'opzione dalla `<select>`.

2. **Stato e `useEffect`**
    - Usa lo stato per memorizzare film e genere selezionato.
    - Eventuali effetti (es. applicare il filtro) devono essere gestiti con `useEffect`.

---

## 📝 Note importanti

- L’attenzione principale è sulla logica e sulla gestione del state.
- Styling e CSS possono essere aggiunti in un secondo momento.

---

## 🌟 Bonus (facoltativi)

- Aggiungi un campo di ricerca per filtrare i film anche per titolo.
- Implementa un form per consentire agli utenti di aggiungere nuovi film alla lista.

---

**Buon lavoro! 🚀**
