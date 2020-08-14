let mongoose = require("mongoose");
let db = require("../models");

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
        console.log(data)

        let parentSeed = [
            {
                firstName: "Donna",
                lastName: "Kleiner",
                username: "dkleiner@email.com",
                password: "password",
                students: [mongoose.Types.ObjectId(data.ops[0]._id)]
            },
            {
                firstName: "Beth",
                lastName: "Bergman",
                username: "bbergman@email.com",
                password: "password",
                students: [mongoose.Types.ObjectId(data.ops[1]._id)]
            },
            {
                firstName: "Walter",
                lastName: "Tejeda",
                username: "wtejeda@email.com",
                password: "password",
                students: [mongoose.Types.ObjectId(data.ops[2]._id), mongoose.Types.ObjectId(data.ops[3]._id)]
            },
            {
                firstName: "Ray",
                lastName: "Min",
                username: "rmin@email.com",
                password: "password",
                students: [mongoose.Types.ObjectId(data.ops[4]._id)]
            }
        ]

        let podSeed = [
            {
                name: "3rd Grade Math",
                grade: "3",
                slots: "6",
                price: "250",
                location: "remote",
                students: [mongoose.Types.ObjectId(data.ops[0]._id), mongoose.Types.ObjectId(data.ops[1]._id)]
            },
            {
                name: "3rd Grade History",
                grade: "3",
                slots: "10",
                price: "220",
                location: "remote",
                students: [mongoose.Types.ObjectId(data.ops[2]._id)]
            },
            {
                name: "5 Stars Pod",
                grade: "5",
                slots: "5",
                price: "175",
                location: "remote",
                students: [mongoose.Types.ObjectId(data.ops[3]._id), mongoose.Types.ObjectId(data.ops[4]._id)]
            },
            {
                name: "5 Stars Pod Premium",
                grade: "5",
                slots: "5",
                price: "375",
                location: "remote"
            },
            {
                name: "Lucky 7",
                grade: "7",
                slots: "8",
                price: "245",
                location: "19128"
            },
            {
                name: "10th Grade",
                grade: "10",
                slots: "10",
                price: "300",
                location: "19123"
            },
            {
                name: "General 10th",
                grade: "10",
                slots: "10",
                price: "250",
                location: "19123"
            },
            {
                name: "Honors 10th",
                grade: "10",
                slots: "10",
                price: "375",
                location: "19123"
            },
            {
                name: "5th Curriculum",
                grade: "5",
                slots: "4",
                price: "150",
                location: "remote"
            },
            {
                name: "5th Curriculum II",
                grade: "5",
                slots: "4",
                price: "150",
                location: "remote"
            },
            {
                name: "Grand Five",
                grade: "5",
                slots: "8",
                price: "200",
                location: "remote"
            },
            {
                name: "AP 10th",
                grade: "10",
                slots: "10",
                price: "425",
                location: "19128"
            },
            {
                name: "Honors 10th",
                grade: "10",
                slots: "10",
                price: "375",
                location: "19125"
            },
            {
                name: "Super 5",
                grade: "5",
                slots: "10",
                price: "250",
                location: "19125"
            },
            {
                name: "First Grade!",
                grade: "1",
                slots: "6",
                price: "300",
                location: "19125"
            },
            {
                name: "Fast 4",
                grade: "4",
                slots: "8",
                price: "225",
                location: "remote"
            },
            {
                name: "7th Honors",
                grade: "7",
                slots: "8",
                price: "245",
                location: "remote"
            },
            {
                name: "The 1st Milestone",
                grade: "1",
                slots: "10",
                price: "175",
                location: "remote"
            },
            {
                name: "AP 10th",
                grade: "10",
                slots: "10",
                price: "475",
                location: "remote"
            },
            {
                name: "General 10th",
                grade: "10",
                slots: "10",
                price: "355",
                location: "remote"
            }
        ]


        // Creating parents
        db.User.deleteMany({})
            .then(() => db.User.collection.insertMany(parentSeed))
            .then(data => {
                console.log(data.result.n + " records inserted!");
                process.exit(0);
            })

        db.Pod.deleteMany({})
            .then(() => {
                db.Pod.collection.insertMany(podSeed)
                })
            .then(podData => {
                console.log(podData);

                let teacherSeed = [
                    {
                        firstName: "Lillian",
                        lastName: "Woods",
                        username: "lwoods@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "remote",
                        image: "images/fullSize/lillianWoodsImg.jpg",
                        gradesTaught: "third",
                        pods: [mongoose.Types.ObjectId(podData.ops[0]._id), mongoose.Types.ObjectId(podData.ops[1]._id)],
                        bio: "Hello! I'm Ms. Woods and I have been teaching the third grade in Chandler district since 2012. My bachelor's and master's degrees are from Penn State University. I am all about teaching from the heart and providing students with the skills and tools that they will need to develop into bright, young, successful adults!"
                    },
                    {
                        firstName: "Angela",
                        lastName: "Davidson",
                        username: "adavidson@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "19128",
                        image: "images/fullSize/angelaDavidsonImg.jpg",
                        gradesTaught: "fifth",
                        pods: [mongoose.Types.ObjectId(podData.ops[2]._id), mongoose.Types.ObjectId(podData.ops[3]._id)],
                        bio: "Hi there, I'm Ms. Davidson from Wishockon. I began working at Wishockon Elementary in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                    },
                    {
                        firstName: "Ted",
                        lastName: "Kelly",
                        username: "tkelly@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "19128",
                        image: "images/fullSize/tedKellyImg.jpg",
                        gradesTaught: "seventh",
                        pods: [mongoose.Types.ObjectId(podData.ops[4]._id)],
                        bio: "Ahoy there! The name's Ted Kelly. I'm all about creating an encouraging and engaging environment that fosters creativity and confidence! My talent is bringing out each student's unique character and personality so that they can learn at a pace that is comfortable for them."
                    },
                    {
                        firstName: "Margo",
                        lastName: "Burns",
                        username: "mburns@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "19123",
                        image: "images/fullSize/margoBurnsImg.jpg",
                        gradesTaught: "tenth",
                        pods: [mongoose.Types.ObjectId(podData.ops[5]._id)],
                        bio: "Welcome! I believe in a learning environment in which students feel comfortable, but I'm also clearcut on setting expectations and rules. I give my best in ensuring each student's growth, and I expect the same in return from my students and will not accept anything less. Success does not come without motivation and effort. It's all about grit!"
                    },
                    {
                        firstName: "Roger",
                        lastName: "Horne",
                        username: "rhorne@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "19123",
                        image: "images/fullSize/rogerHorneImg.jpg",
                        gradesTaught: "tenth",
                        pods: [mongoose.Types.ObjectId(podData.ops[6]._id), mongoose.Types.ObjectId(podData.ops[7]._id)],
                        bio: "Hi, I'm Mr. Horne and my passion and belief has always to invest in our children because they are the future. I'm all about creating an environment that fosters diversity and growth, and I design my curriculum to fit each student's needs. This means that each student's experience may be different from another's, but rest assured that I'll still cover all their needs. It's just that I may mix things up for a change of pace if I feel that something's not working out for a student. So if you are all for the unexpected but also want your child to have a solid learning foundation, I'd love to hear from you!"
                    },
                    {
                        firstName: "Billy",
                        lastName: "Myers",
                        username: "bmyers@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "remote",
                        image: "images/fullSize/billyMyersImg.jpg",
                        gradesTaught: "fifth",
                        pods: [mongoose.Types.ObjectId(podData.ops[8]._id), mongoose.Types.ObjectId(podData.ops[9]._id)],
                        bio: "Hello, Mr. Myers here! I come from a family of teachers so I've always felt that teaching was my calling. My job is to motivate each student and to give them an education that is both solid in foundation but also fun and interesting. My pods are smaller because I really invest in each student's growth and development. If you are looking for a personalized learning experience for your child, contact me today!"
                    },
                    {
                        firstName: "Erick",
                        lastName: "Collier",
                        username: "ecollier@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "remote",
                        image: "images/fullSize/erickCollierImg.jpg",
                        gradesTaught: "fifth",
                        pods: [mongoose.Types.ObjectId(podData.ops[10]._id)],
                        bio: "Hi there, I'm Mrs. Collier from Wishockon. I began working at Wishockon Elementary in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                    },
                    {
                        firstName: "Lena",
                        lastName: "Woods",
                        username: "lwoods@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "19128",
                        image: "images/fullSize/lenaWoodsImg.jpg",
                        gradesTaught: "tenth",
                        pods: [mongoose.Types.ObjectId(podData.ops[11]._id)],
                        bio: "Hi, I'm Miss Woods and my passion and belief has always been to invest in our children because they are the future. I'm all about creating an environment that fosters diversity and growth, and I design my curriculum to fit each student's needs. This means that each student's experience may be different from another's, but rest assured that I'll still cover all their needs. It's just that I may mix things up for a change of pace if I feel that something's not working out for a student. So if you are all for the unexpected but also want your child to have a solid learning foundation, I'd love to hear from you!"
                    },
                    {
                        firstName: "Brigitte",
                        lastName: "Jordan",
                        username: "bjordan@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "19125",
                        image: "images/fullSize/brigitteJordanImg.jpg",
                        gradesTaught: "tenth",
                        pods: [mongoose.Types.ObjectId(podData.ops[12]._id)],
                        bio: "Hi, I'm Miss Jordan and my passion and belief has always been to invest in our children because they are the future. I'm all about creating an environment that fosters diversity and growth, and I design my curriculum to fit each student's needs. This means that each student's experience may be different from another's, but rest assured that I'll still cover all their needs. It's just that I may mix things up for a change of pace if I feel that something's not working out for a student. So if you are all for the unexpected but also want your child to have a solid learning foundation, I'd love to hear from you!"
                    },
                    {
                        firstName: "Ken",
                        lastName: "Best",
                        username: "kbest@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "19125",
                        image: "images/fullSize/kenBestImg.jpg",
                        gradesTaught: "fifth",
                        pods: [mongoose.Types.ObjectId(podData.ops[13]._id)],
                        bio: "Hello, Mr. Best here! I come from a family of teachers so I've always felt that teaching was my calling. My job is to motivate each student and to give them an education that is both solid in foundation but also fun and interesting. My pods are smaller because I really invest in each student's growth and development. If you are looking for a personalized learning experience for your child, contact me today!"
                    },
                    {
                        firstName: "Isabel",
                        lastName: "Browning",
                        username: "ibrowning@email.com",
                        password: "password",
                        isTeacher: true,
                        location: "19125",
                        image: "images/fullSize/isabelBrowningImg.jpg",
                        gradesTaught: "first",
                        pods: [mongoose.Types.ObjectId(podData.ops[14]._id)],
                        bio: "Welcome! I am Miss Browning and I've taught the first grade since 2001. First grade is usually a huge adjustment for children as it really kicks off their educational journey. I understand each day can be filled with many challenges and responsibilities, and I believe that as a teacher, my job is to motive and guide them in the right direction."
                    },
                    {
                        firstName: "Polly",
                        lastName: "Shaffer",
                        username: "pshaffer@email.com",
                        password: "password",
                        isTeacher: true,
                        image: "images/fullSize/pollyShafferImg.jpg",
                        gradesTaught: "fourth",
                        pods: [mongoose.Types.ObjectId(podData.ops[15]._id)],
                        bio: "Hi there, I'm Mrs. Shaffer from Wishockon. I began working at Wishockon Elementary in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                    },
                    {
                        firstName: "Joann",
                        lastName: "McMahon",
                        username: "jmcmahon@email.com",
                        password: "password",
                        isTeacher: true,
                        image: "images/fullSize/joannMcmahonImg.jpg",
                        gradesTaught: "seventh",
                        pods: [mongoose.Types.ObjectId(podData.ops[16]._id)],
                        bio: "Hi there! I'm Joann McMahon. I'm all about creating an encouraging and engaging environment that fosters creativity and confidence! My talent is bringing out each student's unique character and personality so that they can learn at a pace that is comfortable for them."
                    },
                    {
                        firstName: "Bonita",
                        lastName: "Wilcox",
                        username: "bwilcox@email.com",
                        password: "password",
                        isTeacher: true,
                        image: "images/fullSize/bonitaWilcoxImg.jpg",
                        gradesTaught: "first",
                        pods: [mongoose.Types.ObjectId(podData.ops[17]._id)],
                        bio: "Welcome! I am Miss Wilcox and I've taught the first grade since 2001. First grade is usually a huge adjustment for children as it really kicks off their educational journey. I understand each day can be filled with many challenges and responsibilities, and I believe that as a teacher, my job is to motive and guide them in the right direction."
                    },
                    {
                        firstName: "Marva",
                        lastName: "Franklin",
                        username: "mfranklin@email.com",
                        password: "password",
                        isTeacher: true,
                        image: "images/fullSize/marvaFranklinImg.jpg",
                        gradesTaught: "tenth",
                        pods: [mongoose.Types.ObjectId(podData.ops[18]._id)],
                        bio: "Hi there, I'm Mrs. Franklin from Wishockon. I began working at Wishockon High in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                    },
                    {
                        firstName: "Sophia",
                        lastName: "Calderon",
                        username: "scalderon@email.com",
                        password: "password",
                        isTeacher: true,
                        image: "images/fullSize/sophiaCalderonImg.jpg",
                        gradesTaught: "tenth",
                        pods: [mongoose.Types.ObjectId(podData.ops[19]._id)],
                        bio: "Hi there, I'm Mrs. Calderon from Wishockon. I began working at Wishockon High in 2000 as a substitute teacher and moved on to teach full-time in 2006. I believe that every child is gifted in their own way and my goal is help identify those gifts so that we can support and develop them."
                    }
                ]

                // Creating teachers
                db.User.collection.insertMany(teacherSeed)
                    .then(teacherData => {
                        console.log(teacherData.result.n + " records inserted!");
                        process.exit(0);
                    })
            })
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });