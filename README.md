# [Dennis Ivy Hackathon (Code Battle Edition)](https://github.com/divanov11/Hackathon---Code-Battle-Edition#%EF%B8%8F-option-2---developer-search-website-for-hiring-managers)

| ✨ Elevator Pitch ✨     |
|    :----:   |
| Eliminating hiring managers’ efficiency barriers by providing a bespoke platform connecting them directly to leading, developer talent. DevHire’s algorithm leverages advanced filtering and the Elo rating system to principally present hiring managers with top-tier professionals. We help hiring managers save time and money and accelerate towards faster growth in high-quality technological development.     |

## ❗️[LIVE SITE](https://devhire-hackathon.netlify.app)❗️

### 🔥 Check out our: 
- [PitchDeck](https://github.com/shakyracornelius/hackathon-code-battle-edition/blob/main/DevHire%20Pitch%20Deck.pdf)
- [Demo Video](https://clipchamp.com/watch/ptE4j5VBw25) 👀 apologies for the terrible audio
- [Prototype PDF](https://github.com/shakyracornelius/hackathon-code-battle-edition/blob/main/DevHire%20Prototype.pdf)
- [Figma](https://www.figma.com/file/uEM1I2XF5mDI0L7SEdDml0/DENNIS-IVY-HACKATHON?node-id=0%3A1) <br>

## 👎🏾 The Problem 

Hiring Managers are spending a great amount of their valuable time searching LinkedIn and GitHub for developers...time they could be spending driving their companies towards success.  The search on these platforms can be quite frustrating as they do not allow for advanced filtering for specific needs. LinkedIn offers limited privacy while searching and can often inclued spammy requests.

## 🎯 The Solution 

- Tinder-like application 
- Wide variety of tech stacks to choose from.
- User inputs create new stack tags. 
- Advanced Filtering (skills, location, experience etc... 
- Elo rating system 
- Favourite / Shortlist talents 
- Mutual connections 
- Direct messaging only upon mutual connection  
- Detailed developer profiles 
- Search privately 

## 🎨 Design 

### [Figma](https://www.figma.com/file/uEM1I2XF5mDI0L7SEdDml0/DENNIS-IVY-HACKATHON?node-id=0%3A1) <br>
### [Prototype](https://github.com/shakyracornelius/hackathon-code-battle-edition/blob/main/DevHire%20Prototype.pdf)

<img width="1728" alt="HOME - ADVANCE SEARCH" src="https://user-images.githubusercontent.com/108587575/187125682-9dfff299-8b74-43d2-9c66-7df4991296a4.png">
<img width="1728" alt="HOME - MESSAGES" src="https://user-images.githubusercontent.com/108587575/187125694-f59ebf84-d8a2-424e-8d35-0837af9f911a.png">


## 👥 Team 

Developer: [@shakyracc](https://www.twitter.com/shakyracc) <br>
Designer: @3fcc#1923 discord

### 🤝🏾 Team Collaboration Environment 

### Jira Software 
![Screenshot 2022-08-28 at 11 53 32 PM](https://user-images.githubusercontent.com/108587575/187119741-df417ddc-3181-4e1d-8e0b-ee950c0f5532.png)

### Confluence 
![Screenshot 2022-08-28 at 11 50 33 PM](https://user-images.githubusercontent.com/108587575/187119425-62ab3016-2279-49cb-9ce0-7d389aec8e5c.png)
![Screenshot 2022-08-28 at 11 49 25 PM](https://user-images.githubusercontent.com/108587575/187119369-9e9efe75-7855-447a-836e-bbb821f54326.png)

### Zeplin
![Screenshot 2022-08-28 at 11 55 32 PM](https://user-images.githubusercontent.com/108587575/187119940-858f7b35-361f-44b8-95a7-cebd17c22b47.png)

### Whatsapp 
![Screenshot 2022-08-29 at 12 06 19 AM](https://user-images.githubusercontent.com/108587575/187121226-32fc94c0-c9fa-4029-9a95-25066a0bd91e.png)
![Screenshot 2022-08-29 at 12 04 14 AM](https://user-images.githubusercontent.com/108587575/187121242-58b20fa0-a80b-4588-9b15-fd8abefd4961.png)


### 🎨💭 Designer Reflection
It was an eye opening for me - collaborating with developers and I got to used a few new softwares in the course of the project.

### 👩🏽‍💻💭Developer Reflection 

This hackathon was an incredible learning experience for me. Of the entire tech stack used to build this project, I only had experience in Jira and Github. @3fcc#1923 and I discoverd Zeplin together as a platform to share figma designs. 

I initially thought I could tackle the problem with Django, but that flew out the door as soon as it became clear that connecting it to HarperDB was not going to be a beginner friendly task. Weird that I thought this and decided learning 2 stacks (MERN & HERN) was an easier route. 

I started out with MongoDB as the database because there's simply more documentation out there on it. As a complete noob, I needed all the help I could get. I ended up following a tutorial on a MERN Tinder clone by Code with Ania Kubów on [Youtube](https://www.youtube.com/watch?v=Q70IMS-Qnjk). It's 5 hours long, but it's safe to say I've cycled through it at least 7 times. Again. noob. Totally worth it though. 

To understand what Ania was saying, I read the Javascript, React and Nodejs(piece of it at least) handbooks by Flavio Copes @flaviocopes. 10/10 Highly recommend. 

After that I went back to the code and tried my best to understand each line, making modifications where necessary. Once I managed to turn the tinder clone into DevHire using MongoDB, I read up on HarperDB documentation. Oh...this last paragraph all happened today [2022-08-29-04-00] btw. I say that because I often allow myself to forget my hard work. Not today though. Today I really pushed to meet the Hackathon requirements and I feel really proud of what myself and @3fcc#1923 have produced. 

So yes, I got familiar with HarperDB through videos and documentation then gave it a try. *queue emotional damage.* It's simpler than MongoDB in a way I guess, but the lack of community and documentation makes it a HEADACHEEE. omg debugging was a nightmare, but now that I've done it, I feel like I can do it again with less distress. and what's up with the arrays? i couldn't figure out how to 1. query an array and 2. do conditional search on the entire db, not just a row or hashed value. [2022-08-30-02-14]: i think i might have figure this out now. i just needed sleep and revisited articles. [this article by Francesco Ciulla](https://blog.francescociulla.com/crud-rest-api-using-nodejs-express-harperdb-docker) clarified things for me. Which means I might be able to make some improvements to the app. 

**[2022-08-30-02-14] Deploying the site** Yes! Another thing I thought would take no time. 6hours later, here we are. 😪 but I've done it 😁 making use of Heroku's free tier while it's still available. Anyway, here's what it took. 
- googled "how to deploy harperdb app". no results so...
- googled "deploy mern stack". 
- read through a bunch of articles until i landed on one i thought might work for me. i've learned my lesson. don't jump into the first article you find. read them through lest you find yourself screwing up your code and debugging for days. [this article by Nick Ray](https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb) provided a great guide
- debug debug debug debug. if you check the commit history of this repo, you'll see that it was the node_modules, bcrypt and react-country dropdown packages giving the most trouble. i had to git -rm -r --cache . everything. i probably didn't have to do that actually, now that i know how this all works a bit more. i installed packages in the wrong directories. things were all over the place. thank you stackoverflow for existing 🙏
- more debugging: fixing netlify compile issues when deploying with the help of [this article by Julia Undeutsch](https://dev.to/yuridevat/2-ways-to-overcome-deployment-problems-with-react-on-netlify-4l5p#chapter-3)
- fixed page not found error with the help of [this article by Rajesh Royal](https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa)
- success ! 🥳 I think I might actually understand how an API really works now. nice 🤗 i think it's so cool that the app is deployed on two platforms. Netflify frontend and Heroku backend. didn't know that was possible. 


#### Tech Stack 

Backend: 🟪 Heroku, 🐶 HarperDB, 🍃 MongoDB, 🔗 Node.js, 🧩 Express, 🟣 Insomnia <br>
Frontend: 🔷 Netlify, ⚛️ React.js, 🎨 Figma, 🎈 Zeplin <br>
Project Management: 🔷 Jira Software, 🔷 Confluence, 🚥 Google Meet, 📦 Github <br>

I wish I knew about 🟣 Insomnia at the start of the project. I would have saved soooo much time on backend work. I only discovered it today [2022-08-28]. Game changer)

#### Team Work 

I met @3fcc#1923 on reddit a few months ago when they were searching for a Dart programming language learning mate. Soon after that I stopped learning Dart and started learning Python. So we didn't speak for a while, until I stumbled upon this hackathon. I approached them to collaborate with me and to my delight they said yes 💃. They live 5 hours ahead of me, but we managed to make this work almost seamlessly. It was a pleasure working with a fellow knowledge hungry beginner to web development. We used Jira, Confluence, Zeplin, Whatsapp and Google Meet to stay connected. We pitched ideas back and forth and gave words of encouragement along the way. 

#### Acknowledgments 

[Code with Ania Kubów](https://www.youtube.com/watch?v=Q70IMS-Qnjk) <br>
[Flavio Copes](https://flaviocopes.com) <br>
[Aman Mittal](https://dev.to/amanhimself/build-a-rest-api-with-node-js-and-harperdb-3738) <br>
Dennis Ivy for hosting the Hackathon 

#### Lessons 
1. It's easy to get side tracked with cool ideas. "oh let me just add this function really quickly" turns into 5 hours of coding EASILY
2. CSS is a time sink. don't get caught there for too long. tell a friend you're diving in so they can reinforce a time limit. 
3. Having a designer makes life WAYYYYYY easier as a full stack dev. Thank you @3fcc#1923 for taking on this challenge with me. 
4. MVP MVP MVP MVP. I eliminated a block of code every time I sat down with the laptop. Too many bugs? can it. this is a prototype. I kept thinking, " there are gonna be so many experts in this competition, i NEEED working code and cool features to stand out"............garbage. Focus on your MVP. Refine the MVP if necessary. 
5. Good project management tools help A LOT. They make remote team collaboration seemless. 
