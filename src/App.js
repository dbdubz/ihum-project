import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Exhibit from './pages/Exhibit';
import LateMedieval from './pages/exhibits/late_medieval/lm';
import EarlyRenaissance from './pages/exhibits/early_renaissance/er';
import EarlyMidRenaissance from './pages/exhibits/early_mid_renaissance/emr';
import MidRenaissance from './pages/exhibits/mid_renaissance/mr';
import HighRenaissance from './pages/exhibits/high_renaissance/hr';
import LateRenaissance from './pages/exhibits/late_renaissance/lr';
function getPeriodData(period) { 
  const data = {
    "period" : 
      {
          "late-medieval": [
              {
                  "name": "Late Medieval",
                  "start": "c. 1300",
                  "end": 1400,
                  "artifacts":  [
                      {
                          "the-last-judgement": 
                          {
                              "name": "The Last Judgement",
                              "artist":
                                {
                                    "name": "Giotto di Bondone",
                                    "dates": "c. 1267-1337",
                                    "period": "Late Medieval",
                                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Giotto_-_Tableau_repr%C3%A9sentant_cinq_ma%C3%AEtres_de_la_Renaissance_florentine_%28d%C3%A9but_XVIe_si%C3%A8cle_%3F%29.JPG/1280px-Giotto_-_Tableau_repr%C3%A9sentant_cinq_ma%C3%AEtres_de_la_Renaissance_florentine_%28d%C3%A9but_XVIe_si%C3%A8cle_%3F%29.JPG"
                                },
                              "artist-last": "di Bondone",
                              "year": "c. 1305",
                              "description": "The Last Judgement is a fresco by the Italian Renaissance painter Giotto di Bondone housed in the Scrovegni Chapel in Padua, Italy. It was probably executed between 1305 and 1306 and is located in the upper register of the wall of the chancel, facing the altar. It depicts the Second Coming of Christ and the final and eternal judgment by God of all humanity.",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/1/16/Last-judgment-scrovegni-chapel-giotto-1306.jpg"
                          }
                      }
                  ]
              }
          ],
          "early-renaissance": [
              {
                  "name": "Early Renaissance",
                  "start": "c. 1400",
                  "end": 1450,
                  "artifacts": [  
                      {
                          "the-holy-trinity": 
                          {
                              "name": "The Holy Trinity",
                              "artist": {
                                    "name": "Masaccio",
                                    "dates": "c. 1401-1428",
                                    "period": "Early Renaissance",
                                    "img": "https://upload.wikimedia.org/wikipedia/commons/9/96/Masaccio_Self_Portrait.jpg"
                                },
                              "artist-last": "Masaccio",
                              "year": "c. 1427",
                              "description": "The Holy Trinity, with the Virgin and Saint John and donors (Italian:  Santa Trinità) is a fresco by the Early Italian Renaissance painter Masaccio. It is located in the Dominican church of Santa Maria Novella, in Florence.",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Masaccio%2C_trinit%C3%A0.jpg/800px-Masaccio%2C_trinit%C3%A0.jpg"
                          },
                          "self-portrait": 
                          {
                              "name": "Self Portrait",
                              "artist": {
                                    "name": "Leon Battista Alberti",
                                    "dates": "1404-1472",
                                    "period": "Early Renaissance",
                                    "img": "https://upload.wikimedia.org/wikipedia/commons/8/84/Raising_of_the_Son_of_Teophilus_and_St._Peter_Enthroned_27.jpg"
                                },
                              "artist-last": "Alberti",
                              "year": "c. 1435",
                              "description": "",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Leon_Battista_Alberti%2C_Self-Portrait%2C_c._1435%2C_NGA_43845.jpg/800px-Leon_Battista_Alberti%2C_Self-Portrait%2C_c._1435%2C_NGA_43845.jpg"
                          }
                      }
                  ]
              }
          ],
          "early-mid-renaissance": [
              {
                  "name": "Early-Mid Renaissance",
                  "start": "c. 1450",
                  "end": 1500,
                  "artifacts": [
                      {
                          "the-birth-of-venus": 
                          {
                              "name": "The Birth of Venus",
                              "artist": {
                                "name": "Sandro Botticelli",
                                "dates": "c. 1445-1510",
                                "period": "Early-Mid Renaissance",
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/800px-Sandro_Botticelli_083.jpg"
                              },
                              "artist-last": "Botticelli",
                              "year": "c. 1486",
                              "description": "The Birth of Venus is a painting by the Italian artist Sandro Botticelli probably made in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown (called Venus Anadyomene and often depicted in art). The painting is in the Uffizi Gallery in Florence, Italy.",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1920px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
                          }
                      }
                  ]
              }
          ],
          "mid-renaissance": [ 
              { 
                  "name": "Mid Renaissance",
                  "start": "c. 1500",
                  "end": 1550,
                  "artifacts": [
                      {
                          "vitruvian-man": 
                          {
                              "name": "Vitruvian Man",
                              "artist": {
                                "name": "Leonardo da Vinci",
                                "dates": "c. 1452-1519",
                                "period": ["Mid Renaissance", "High Renaissance"],
                                "img": "https://cdn.britannica.com/57/194757-050-FD0A1CAA/Portrait-Leonardo-da-Vinci.jpg"
                              },
                              "artist-last": "da Vinci",
                              "year": "c. 1490",
                              "description": "",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/800px-Da_Vinci_Vitruve_Luc_Viatour.jpg"
                          },
                          "the-school-of-athens": 
                          {
                              "name": "The School of Athens",
                              "artist": {
                                "name": "Raphael",
                                "dates": "c. 1483-1520",
                                "period": "Mid Renaissance",
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/800px-Raffaello_Sanzio.jpg"
                              },
                              "artist-last": "Raphael",
                              "year": "c. 1511",
                              "description": "The School of Athens (Italian:  Scuola di Atene) is a fresco by the Italian Renaissance artist Raphael. It was painted between 1509 and 1511 as a part of Raphael's commission to decorate the rooms now known as the Stanze di Raffaello, in the Apostolic Palace in the Vatican. The Stanza della Segnatura was the first of the rooms to be decorated, and The School of Athens, representing Philosophy, was probably the second painting to be finished there, after La Disputa (Theology) on the opposite wall, and the Parnassus (Literature).",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg"
                          }
                      }
                  ]
              }
          ],
          "high-renaissance": [
              {
                  "name": "High Renaissance",
                  "start": "c. 1490",
                  "end": 1530,
                  "artifacts": [
                      {
                          "assumption-of-the-virgin": 
                          {
                              "name": "Assumption of the Virgin",
                              "artist": {
                                "name": "Titian",
                                "dates": "c. 1488-1576",
                                "period": ["High Renaissance", "Late Renaissance"],
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tizian_090.jpg/800px-Tizian_090.jpg"
                              },
                              "artist-last": "Titian",
                              "year": "c. 1516",
                              "description": "",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tizian_041.jpg/800px-Tizian_041.jpg"
                          },
                          "mona-lisa":
                          {
                              "name": "Mona Lisa",
                              "artist": {
                                "name": "Leonardo da Vinci",
                                "dates": "c. 1452-1519",
                                "period": ["Mid Renaissance", "High Renaissance"],
                                "img": "https://cdn.britannica.com/57/194757-050-FD0A1CAA/Portrait-Leonardo-da-Vinci.jpg"
                              },
                              "artist-last": "da Vinci",
                              "year": "c. 1503",
                              "description": "",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                          }
                      }
                  ]
              }
          ],
          "late-renaissance": [
              {
                  "name": "Late Renaissance",
                  "start": "c. 1530",
                  "end": 1600,
                  "artifacts": [
                      {
                          "bacchus-and-ariadne":
                          {
                              "name": "Bacchus and Ariadne",
                              "artist": {
                                "name": "Titian",
                                "dates": "c. 1488-1576",
                                "period": ["High Renaissance", "Late Renaissance"],
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tizian_090.jpg/800px-Tizian_090.jpg"
                              },
                              "artist-last": "Titian",
                              "year": "c. 1520",
                              "description": "",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Titian_Bacchus_and_Ariadne.jpg/1024px-Titian_Bacchus_and_Ariadne.jpg"
                          },
                          "the-harvesters":
                          {
                              "name": "The Harvesters",
                              "artist": {
                                "name": "Pieter Bruegel the Elder",
                                "dates": "c. 1525-1569",
                                "period": "Late Renaissance",
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pieter_Bruegel_the_Elder_-_The_Painter_and_the_Buyer%2C_ca._1566_-_Google_Art_Project.jpg/800px-Pieter_Bruegel_the_Elder_-_The_Painter_and_the_Buyer%2C_ca._1566_-_Google_Art_Project.jpg"
                              },
                              "artist-last": "Bruegel the Elder",
                              "year": "c. 1565",
                              "description": "",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg/1280px-Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg"
                          },
                          "the-calling-of-saint-matthew":
                          {
                              "name": "The Calling of Saint Matthew",
                              "artist": {
                                "name": "Caravaggio",
                                "dates": "c. 1571-1610",
                                "period": "Late Renaissance",
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/800px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg"
                              },
                              "artist-last": "Caravaggio",
                              "year": "c. 1599",
                              "description": "",
                              "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/1024px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg"
                          }
                      }
                  ]
              }
          ]
      }
  }

  if (period !== "all") {
    return data.period[period][0];
  }
  else {
    //console.log(data.period["late-medieval"][0].artifacts[0]["the-last-judgement"].name);
    return data.period;
  }
}

function App() {
  return (
    <div className="App">
      <Layout myjson={getPeriodData('all')}>
        <Routes>
          <Route path="/ihum-project" element={<Home />} />
          <Route path="/ihum-project/exhibit" element={<Exhibit />} />
          <Route path="/ihum-project/exhibit/late-medieval" element={<LateMedieval data={getPeriodData('late-medieval')} />} />
          <Route path="/ihum-project/exhibit/late-medieval/:artifact" element={<LateMedieval data={getPeriodData('late-medieval')} />} />
          <Route path="/ihum-project/exhibit/early-renaissance" element={<EarlyRenaissance data={getPeriodData('early-renaissance')} />} />
          <Route path="/ihum-project/exhibit/early-renaissance/:artifact" element={<EarlyRenaissance data={getPeriodData('early-renaissance')} />} />
          <Route path="/ihum-project/exhibit/early-mid-renaissance" element={<EarlyMidRenaissance data={getPeriodData('early-mid-renaissance')} />} />
          <Route path="/ihum-project/exhibit/early-mid-renaissance/:artifact" element={<EarlyMidRenaissance data={getPeriodData('early-mid-renaissance')} />} />
          <Route path="/ihum-project/exhibit/mid-renaissance" element={<MidRenaissance data={getPeriodData('mid-renaissance')} />} />
          <Route path="/ihum-project/exhibit/mid-renaissance/:artifact" element={<MidRenaissance data={getPeriodData('mid-renaissance')} />} />
          <Route path="/ihum-project/exhibit/high-renaissance" element={<HighRenaissance data={getPeriodData('high-renaissance')} />} />
          <Route path="/ihum-project/exhibit/high-renaissance/:artifact" element={<HighRenaissance data={getPeriodData('high-renaissance')} />} />
          <Route path="/ihum-project/exhibit/late-renaissance" element={<LateRenaissance data={getPeriodData('late-renaissance')} />} />
          <Route path="/ihum-project/exhibit/late-renaissance/:artifact" element={<LateRenaissance data={getPeriodData('late-renaissance')} />} />
          <Route path='*' element={<Home />} /> 
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
