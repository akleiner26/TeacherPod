let mongoose = require("mongoose");
let db = require("../models");
const bcrypt = require("bcryptjs");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/teacher-pod", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let studentSeed = [
    {
        firstName: "Andrew",
        lastName: "Kleiner",
        preferredName: "Andrew",
        gradeLevel: "3"
    },
    {
        firstName: "Gary",
        lastName: "Bergman",
        preferredName: "Gary",
        gradeLevel: "3"
    },
    {
        firstName: "Wes",
        lastName: "Tejeda",
        preferredName: "Little Wes",
        gradeLevel: "3"
    },
    {
        firstName: "Wesley",
        lastName: "Tejeda",
        preferredName: "Big Wes",
        gradeLevel: "5"
    },
    {
        firstName: "Esther",
        lastName: "Min",
        preferredName: "Esther",
        gradeLevel: "5"
    }
]

db.Student.deleteMany({})
    .then(() => db.Student.collection.insertMany(studentSeed))
    .then(data => {
        console.log("===============================")
        console.log(data.result.n + " students inserted!")

        let parentSeed = [
            {
                firstName: "Donna",
                lastName: "Kleiner",
                username: "dkleiner@email.com",
                password: bcrypt.hashSync(bcrypt.hashSync("password")),
                students: [mongoose.Types.ObjectId(data.ops[0]._id)]
            },
            {
                firstName: "Beth",
                lastName: "Bergman",
                username: "bbergman@email.com",
                password: bcrypt.hashSync("password"),
                students: [mongoose.Types.ObjectId(data.ops[1]._id)]
            },
            {
                firstName: "Walter",
                lastName: "Tejeda",
                username: "wtejeda@email.com",
                password: bcrypt.hashSync("password"),
                students: [mongoose.Types.ObjectId(data.ops[2]._id), mongoose.Types.ObjectId(data.ops[3]._id)]
            },
            {
                firstName: "Ray",
                lastName: "Min",
                username: "rmin@email.com",
                password: bcrypt.hashSync("password"),
                students: [mongoose.Types.ObjectId(data.ops[4]._id)]
            }
        ]

        let podSeed = [
            {
                name: "3rd Grade Math",
                grade: "3rd Grade",
                slots: "6",
                price: "250",
                location: "remote",
                students: [mongoose.Types.ObjectId(data.ops[0]._id), mongoose.Types.ObjectId(data.ops[1]._id)]
            },
            {
                name: "3rd Grade History",
                grade: "3rd Grade",
                slots: "10",
                price: "250",
                location: "remote",
                students: [mongoose.Types.ObjectId(data.ops[2]._id)]
            },
            {
                name: "5 Stars Pod",
                grade: "5th Grade",
                slots: "5",
                price: "375",
                location: "remote",
                students: [mongoose.Types.ObjectId(data.ops[3]._id), mongoose.Types.ObjectId(data.ops[4]._id)]
            },
            {
                name: "5 Stars Pod Premium",
                grade: "5th Grade",
                slots: "5",
                price: "375",
                location: "remote"
            },
            {
                name: "Lucky 7",
                grade: "7th Grade",
                slots: "8",
                price: "245",
                location: "19128"
            },
            {
                name: "10th Grade",
                grade: "10th Grade",
                slots: "10",
                price: "300",
                location: "19123"
            },
            {
                name: "General 10th",
                grade: "10th Grade",
                slots: "10",
                price: "250",
                location: "19123"
            },
            {
                name: "Honors 10th",
                grade: "10th Grade",
                slots: "10",
                price: "250",
                location: "19123"
            },
            {
                name: "5th Curriculum",
                grade: "5th Grade",
                slots: "9",
                price: "150",
                location: "remote"
            },
            {
                name: "5th Curriculum II",
                grade: "5th Grade",
                slots: "9",
                price: "150",
                location: "remote"
            },
            {
                name: "Grand Five",
                grade: "5th Grade",
                slots: "8",
                price: "200",
                location: "remote"
            },
            {
                name: "AP 10th",
                grade: "10th Grade",
                slots: "10",
                price: "425",
                location: "19128"
            },
            {
                name: "Honors 10th",
                grade: "10th Grade",
                slots: "10",
                price: "375",
                location: "19125"
            },
            {
                name: "Super 5",
                grade: "5th Grade",
                slots: "10",
                price: "250",
                location: "19125"
            },
            {
                name: "First Grade!",
                grade: "1st Grade",
                slots: "6",
                price: "300",
                location: "19125"
            },
            {
                name: "Fast 4",
                grade: "4th Grade",
                slots: "8",
                price: "225",
                location: "remote"
            },
            {
                name: "7th Honors",
                grade: "7th Grade",
                slots: "8",
                price: "245",
                location: "remote"
            },
            {
                name: "The 1st Milestone",
                grade: "1st Grade",
                slots: "10",
                price: "175",
                location: "remote"
            },
            {
                name: "AP 10th",
                grade: "10th Grade",
                slots: "10",
                price: "475",
                location: "remote"
            },
            {
                name: "General 10th",
                grade: "10th Grade",
                slots: "10",
                price: "355",
                location: "remote"
            }
        ]

        // Creating parents
        db.User.deleteMany({})
            .then(() => db.User.collection.insertMany(parentSeed))
            .then(data => {
                console.log("===============================")
                console.log(data.result.n + " parents inserted!");
                db.Pod.deleteMany({})
                    .then(() => db.Pod.collection.insertMany(podSeed))
                    .then(podData => {
                        console.log("===============================")
                        console.log(podData);
                        console.log(podData.result.n + " pods inserted!");

                        let teacherSeed = [
                            {
                                firstName: "Lillian",
                                lastName: "Woods",
                                username: "lwoods@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                image: "images/fullSize/lillianWoodsImg.jpg",
                                gradesTaught: "3rd Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[0]._id), mongoose.Types.ObjectId(podData.ops[1]._id)],
                                bio: "Hello! I'm Ms. Woods and I have been teaching the third grade in Chandler district since 2012. My bachelor's and master's degrees are from Penn State University. I am all about teaching from the heart and providing students with the skills and tools that they will need to develop into bright, young, successful adults!"
                            },
                            {
                                firstName: "Angela",
                                lastName: "Davidson",
                                username: "adavidson@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                image: "images/fullSize/angelaDavidsonImg.jpg",
                                gradesTaught: "5th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[2]._id), mongoose.Types.ObjectId(podData.ops[3]._id)],
                                bio: "Hi there, I'm Ms. Davidson from Wishockon. I began working at Wishockon Elementary in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                            },
                            {
                                firstName: "Ted",
                                lastName: "Kelly",
                                username: "tkelly@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "19128",
                                image: "images/fullSize/tedKellyImg.jpg",
                                gradesTaught: "7th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[4]._id)],
                                bio: "Ahoy there! The name's Ted Kelly. I'm all about creating an encouraging and engaging environment that fosters creativity and confidence! My talent is bringing out each student's unique character and personality so that they can learn at a pace that is comfortable for them."
                            },
                            {
                                firstName: "Margo",
                                lastName: "Burns",
                                username: "mburns@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "19123",
                                image: "images/fullSize/margoBurnsImg.jpg",
                                gradesTaught: "10th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[5]._id)],
                                bio: "Welcome! I believe in a learning environment in which students feel comfortable, but I'm also clearcut on setting expectations and rules. I give my best in ensuring each student's growth, and I expect the same in return from my students and will not accept anything less. Success does not come without motivation and effort. It's all about grit!"
                            },
                            {
                                firstName: "Roger",
                                lastName: "Horne",
                                username: "rhorne@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "19123",
                                image: "",
                                gradesTaught: "10th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[6]._id), mongoose.Types.ObjectId(podData.ops[7]._id)],
                                bio: "Hi, I'm Mr. Horne and my passion and belief has always to invest in our children because they are the future. I'm all about creating an environment that fosters diversity and growth, and I design my curriculum to fit each student's needs. This means that each student's experience may be different from another's, but rest assured that I'll still cover all their needs. It's just that I may mix things up for a change of pace if I feel that something's not working out for a student. So if you are all for the unexpected but also want your child to have a solid learning foundation, I'd love to hear from you!"
                            },
                            {
                                firstName: "Billy",
                                lastName: "Myers",
                                username: "bmyers@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "remote",
                                image: "images/fullSize/billyMyersImg.jpg",
                                gradesTaught: "5th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[8]._id), mongoose.Types.ObjectId(podData.ops[9]._id)],
                                bio: "Hello, Mr. Myers here! I come from a family of teachers so I've always felt that teaching was my calling. My job is to motivate each student and to give them an education that is both solid in foundation but also fun and interesting. My pods are smaller because I really invest in each student's growth and development. If you are looking for a personalized learning experience for your child, contact me today!"
                            },
                            {
                                firstName: "Erick",
                                lastName: "Collier",
                                username: "ecollier@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "remote",
                                image: "images/fullSize/erickCollierImg.jpg",
                                gradesTaught: "5th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[10]._id)],
                                bio: "Hi there, I'm Mrs. Collier from Wishockon. I began working at Wishockon Elementary in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                            },
                            {
                                firstName: "Lena",
                                lastName: "Woods",
                                username: "lwoods2@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "19128",
                                image: "images/fullSize/lenaWoodsImg.jpg",
                                gradesTaught: "10th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[11]._id)],
                                bio: "Hi, I'm Miss Woods and my passion and belief has always been to invest in our children because they are the future. I'm all about creating an environment that fosters diversity and growth, and I design my curriculum to fit each student's needs. This means that each student's experience may be different from another's, but rest assured that I'll still cover all their needs. It's just that I may mix things up for a change of pace if I feel that something's not working out for a student. So if you are all for the unexpected but also want your child to have a solid learning foundation, I'd love to hear from you!"
                            },
                            {
                                firstName: "Brigitte",
                                lastName: "Jordan",
                                username: "bjordan@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "19125",
                                image: "images/fullSize/brigitteJordanImg.jpg",
                                gradesTaught: "10th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[12]._id)],
                                bio: "Hi, I'm Miss Jordan and my passion and belief has always been to invest in our children because they are the future. I'm all about creating an environment that fosters diversity and growth, and I design my curriculum to fit each student's needs. This means that each student's experience may be different from another's, but rest assured that I'll still cover all their needs. It's just that I may mix things up for a change of pace if I feel that something's not working out for a student. So if you are all for the unexpected but also want your child to have a solid learning foundation, I'd love to hear from you!"
                            },
                            {
                                firstName: "Ken",
                                lastName: "Best",
                                username: "kbest@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "19125",
                                image: "images/fullSize/kenBestImg.jpg",
                                gradesTaught: "5th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[13]._id)],
                                bio: "Hello, Mr. Best here! I come from a family of teachers so I've always felt that teaching was my calling. My job is to motivate each student and to give them an education that is both solid in foundation but also fun and interesting. My pods are smaller because I really invest in each student's growth and development. If you are looking for a personalized learning experience for your child, contact me today!"
                            },
                            {
                                firstName: "Isabel",
                                lastName: "Browning",
                                username: "ibrowning@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                location: "19125",
                                image: "images/fullSize/isabelBrowningImg.jpg",
                                gradesTaught: "1st Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[14]._id)],
                                bio: "Welcome! I am Miss Browning and I've taught the first grade since 2001. First grade is usually a huge adjustment for children as it really kicks off their educational journey. I understand each day can be filled with many challenges and responsibilities, and I believe that as a teacher, my job is to motive and guide them in the right direction."
                            },
                            {
                                firstName: "Polly",
                                lastName: "Shaffer",
                                username: "pshaffer@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                image: "images/fullSize/pollyShafferImg.jpg",
                                gradesTaught: "4th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[15]._id)],
                                bio: "Hi there, I'm Mrs. Shaffer from Wishockon. I began working at Wishockon Elementary in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                            },
                            {
                                firstName: "Joann",
                                lastName: "McMahon",
                                username: "jmcmahon@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                image: "images/fullSize/joannMcmahonImg.jpg",
                                gradesTaught: "7th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[16]._id)],
                                bio: "Hi there! I'm Joann McMahon. I'm all about creating an encouraging and engaging environment that fosters creativity and confidence! My talent is bringing out each student's unique character and personality so that they can learn at a pace that is comfortable for them."
                            },
                            {
                                firstName: "Bonita",
                                lastName: "Wilcox",
                                username: "bwilcox@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                image: "images/fullSize/bonitaWilcoxImg.jpg",
                                gradesTaught: "1st Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[17]._id)],
                                bio: "Welcome! I am Miss Wilcox and I've taught the first grade since 2001. First grade is usually a huge adjustment for children as it really kicks off their educational journey. I understand each day can be filled with many challenges and responsibilities, and I believe that as a teacher, my job is to motive and guide them in the right direction."
                            },
                            {
                                firstName: "Marva",
                                lastName: "Franklin",
                                username: "mfranklin@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                image: "images/fullSize/marvaFranklinImg.jpg",
                                gradesTaught: "10th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[18]._id)],
                                bio: "Hi there, I'm Mrs. Franklin from Wishockon. I began working at Wishockon High in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                            },
                            {
                                firstName: "Sophia",
                                lastName: "Calderon",
                                username: "scalderon@email.com",
                                password: bcrypt.hashSync("password"),
                                isTeacher: true,
                                image: "images/fullSize/sophiaCalderonImg.jpg",
                                gradesTaught: "10th Grade",
                                pods: [mongoose.Types.ObjectId(podData.ops[19]._id)],
                                bio: "Hi there, I'm Mrs. Calderon from Wishockon. I began working at Wishockon High in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                            }
                        ]

                        // Creating teachers
                        db.User.collection.insertMany(teacherSeed)
                            .then(data => {
                                ("===============================")
                                console.log(data.result.n + " teachers inserted!");
                                let conversationSeed = [
                                    {
                                        participants: ["wtejeda@email.com", "lwoods@email.com"]
                                    },
                                    {
                                        participants: ["dkleiner@email.com", "lwoods@email.com"]
                                    },
                                    {
                                        participants: ["gbergman@email.com", "lwoods@email.com"]
                                    },
                                    {
                                        participants: ["rmin@email.com", "lwoods@email.com"]
                                    },
                                    {
                                        participants: ["wtejeda@email.com", "lwoods2@email.com"]
                                    },
                                    {
                                        participants: ["dkleiner@email.com", "lwoods2@email.com"]
                                    },
                                    {
                                        participants: ["gbergman@email.com", "lwoods2@email.com"]
                                    },
                                    {
                                        participants: ["rmin@email.com", "lwoods2@email.com"]
                                    },
                                    {
                                        participants: ["wtejeda@email.com", "adavidson@email.com"]
                                    },
                                    {
                                        participants: ["dkleiner@email.com", "adavidson@email.com"]
                                    },
                                    {
                                        participants: ["gbergman@email.com", "adavidson@email.com"]
                                    },
                                    {
                                        participants: ["rmin@email.com", "adavidson@email.com"]
                                    },
                                    {
                                        participants: ["wtejeda@email.com", "tkelly@email.com"]
                                    },
                                    {
                                        participants: ["dkleiner@email.com", "tkelly@email.com"]
                                    },
                                    {
                                        participants: ["gbergman@email.com", "tkelly@email.com"]
                                    },
                                    {
                                        participants: ["rmin@email.com", "tkelly@email.com"]
                                    },
                                    {
                                        participants: ["wtejeda@email.com", "mburns@email.com"]
                                    },
                                    {
                                        participants: ["dkleiner@email.com", "mburns@email.com"]
                                    },
                                    {
                                        participants: ["gbergman@email.com", "mburns@email.com"]
                                    },
                                    {
                                        participants: ["rmin@email.com", "mburns@email.com"]
                                    }
                                ];
                                db.Conversation.deleteMany({})
                                    .then(() => db.Conversation.collection.insertMany(conversationSeed))
                                    .then(data => {
                                        console.log("===============================")
                                        console.log(data.result.n + " conversations inserted!")
                                        let messageSeed = [
                                            {
                                                message: {
                                                    sender: "dkleiner",
                                                    receiver: "lwoods@email.com",
                                                    content: "I'm interested in enrolling my child in your pod, their name is Andy Kleiner."
                                                }
                                            },
                                            {
                                                message: {
                                                    sender: "gbergman@email.com",
                                                    receiver: "lwoods@email.com",
                                                    content: "I'm interested in enrolling my child in your pod, their name is Gareth Bergman."
                                                }
                                            },
                                            {
                                                message: {
                                                    sender: "rmin@email.com",
                                                    receiver: "lwoods@email.com",
                                                    content: "I'm interested in enrolling my child in your pod, their name is Estor Min"
                                                }
                                            },
                                            {
                                                message: {
                                                    sender: "wtejeda@email.com",
                                                    receiver: "lwoods@email.com",
                                                    content: "I'm interested in enrolling my child in your pod, their name is Weston Tejeda"
                                                }
                                            }
                                        ]
                                        db.Messenger.deleteMany({})
                                            .then(() => db.Messenger.collection.insertMany(messageSeed))
                                            .then(data => {
                                                console.log("===============================")
                                                console.log(data.result.n + " messages inserted!")
                                                process.exit(0);
                                            });
                            })
                        })
                    })
            })

    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });