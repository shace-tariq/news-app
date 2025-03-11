 import React, { Component } from 'react'
 
 export class navbar extends Component {
   render() {
     return (
       <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">GEO NEWS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            
                             
                        </ul>
                        
                    </div>
                </div>
            </nav>
       </div>
     )
   }
 }
 
 export default navbar
 /* {
    "status": "ok",
    "totalResults": 10,
    "articles": [
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Syria: Security forces accused of executing dozens of Alawites",
    "description": "The British-based Syrian Observatory for Human Rights says 52 people belonging to the Alawite minority were executed in the coastal province of Latakia.",
    "url": "https://www.bbc.co.uk/news/articles/czxnwrqey4go",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1d4b/live/6fc55210-fb76-11ef-a729-0d4be0abe7e6.jpg",
    "publishedAt": "2025-03-07T18:52:19.6368291Z",
    "content": "This followed clashes between government forces and fighters loyal to the deposed President Bashar al-Assad, which left more than 70 dead.\r\nA curfew has been imposed in the cities of Homs, Latakia an… [+1346 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC Weather",
    "title": "UK weather: sunny and warm weekend for most",
    "description": "Warm and sunny this weekend but it will turn colder next week",
    "url": "https://www.bbc.co.uk/weather/articles/cvg1n4p5mr8o",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_weather/1200/cpsprodpb/b5ad/live/3dff2be0-fb60-11ef-a79f-495dc9a11716.jpg",
    "publishedAt": "2025-03-07T18:22:33.0597082Z",
    "content": "Outdoor plans this weekend? There will be more early spring sunshine to bask in for the majority, with temperatures remaining well above the seasonal average. \r\nWith a glorious start to the meteorolo… [+471 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Granny gets X-rated message after Apple AI fail",
    "description": "Louise Littlejohn said she was shocked and then laughed when she received the error strewn voicemail transcription.",
    "url": "https://www.bbc.co.uk/news/articles/c0l1kpz3w32o",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/d3a2/live/e812f150-fb6c-11ef-8621-3125994e56e9.jpg",
    "publishedAt": "2025-03-07T18:22:27.4985916Z",
    "content": "Many people in Scotland will remember a sketch from the BBC comedy show Burnistoun, when two Scottish men get trapped after the voice-activated lift can't understand their accents.\r\nIt has hundreds o… [+866 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Reform UK refers MP Rupert Lowe to police",
    "description": "The party alleges the Great Yarmouth MP made \"threats of physical violence\" against its party chair.",
    "url": "https://www.bbc.co.uk/news/articles/c4ge5jl62nro",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/d110/live/e50a03d0-fb7c-11ef-9545-19764021d174.jpg",
    "publishedAt": "2025-03-07T18:22:23.7003211Z",
    "content": "Reform UK says it has reported its MP Rupert Lowe to police, alleging he has made \"threats of physical violence\" against party chairman Zia Yusuf.\r\nIn a statement with chief whip Lee Anderson, Yusuf … [+495 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Scottish kebab pie crowned UK 'pie of pies'",
    "description": "Christine and Paul Boyle from Boghall Butchers in West Lothian made the award winning pie.",
    "url": "https://www.bbc.co.uk/news/articles/cddym06rmqno",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/7854/live/85a5f7d0-fb65-11ef-9e61-71ee71f26eb1.jpg",
    "publishedAt": "2025-03-07T18:07:24.0763201Z",
    "content": "He said: \"We had to develop it for the English market for the competition because they love shortcrust pastry. \r\n\"We used the same recipe we use in the shop but did it in a short crust pastry and the… [+1421 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Intuitive Machines: spacecraft can't complete Moon mission",
    "description": "The mission was supposed to last 10 days but less then a day after landing, the craft is running out of power.",
    "url": "https://www.bbc.co.uk/news/articles/crew5z55ygjo",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/252e/live/7f229420-fb76-11ef-896e-d7e7fb1719a4.jpg",
    "publishedAt": "2025-03-07T18:07:20.4186437Z",
    "content": "It is considered a difficult and risky area to land in. \r\nThe sun is low in the sky and casts shadow that can confuse landers trying to touch down. And the amount of sunlight reaching the craft can l… [+1062 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "'I'm Danny Dyer – I don't need a chat-up line'",
    "description": "In his new film the actor plays a man who has six weeks save his marriage - but what are his top tips for romantic bliss?",
    "url": "https://www.bbc.co.uk/news/articles/c3e4zpe0y4eo",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/a442/live/9aa347e0-faa3-11ef-bb1e-71167c28cbc5.jpg",
    "publishedAt": "2025-03-07T16:37:26.9693789Z",
    "content": "Dyer says his wife has grown with him and kept him grounded. \"She's a very special human being and she's never really been fazed by my work.\"\r\nHe says he comes from a working class family and the Mar… [+937 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "How six Bulgarians did Russia's dirty work from the UK",
    "description": "A spy cell tracked the Kremlin's enemies across Europe, plotting honeytraps, kidnap and murder.",
    "url": "https://www.bbc.co.uk/news/articles/c627685p21eo",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/8ccc/live/85e1e1b0-e232-11ef-a319-fb4e7360c4ec.png",
    "publishedAt": "2025-03-07T16:37:22.6554883Z",
    "content": "None of the six denied their actions.\r\nRoussev, Dzhambazov and Stoyanov pleaded guilty before trial. Ivanova, Gaberova and Ivanchev denied knowing they were working for Russia.\r\nThe jury disagreed.\r\n… [+820 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Donald Tusk announces military training plans for all men in Poland",
    "description": "Poland's prime minister said his government plans to have a model ready by the end of the year.",
    "url": "https://www.bbc.co.uk/news/articles/cy83r93l208o",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/f2d5/live/8c48d0c0-fb5c-11ef-b636-c1776c0b9770.jpg",
    "publishedAt": "2025-03-07T15:37:26.2501858Z",
    "content": "Tusk said the Ukrainian army has 800,000 soldiers, whilst Russia has around 1.3 million and he wants to increase the size of the Polish army, including reservists, to 500,000 from around 200,000 now.… [+532 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Bulgarians guilty of spying for Russia in the UK",
    "description": "The spy cell undertook elaborate surveillance on people and places targeted by Russia.",
    "url": "https://www.bbc.co.uk/news/articles/cx2gx52xqqpo",
    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/df86/live/761d5aa0-fb52-11ef-896e-d7e7fb1719a4.jpg",
    "publishedAt": "2025-03-07T15:37:18.8590038Z",
    "content": "The prosecution case focused on six operations carried out by the spies:\r\nOperation 1\r\nThis targeted journalist Christo Grozev.\r\nJan Marsalek and Roussev exchanged messages discussing their options i… [+2423 chars]"
    }
    ]
    } */