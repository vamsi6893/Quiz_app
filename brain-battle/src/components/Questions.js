const questions = {
    java: [
         {
        question: "What is the size of int in Java?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
        answer: 1
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["this", "super", "extends", "implements"],
        answer: 2
    },
    {
        question: "Which method is the entry point of a Java program?",
        options: ["start()", "run()", "main()", "init()"],
        answer: 2
    },
    {
        question: "Which of the following is not a Java keyword?",
        options: ["class", "int", "get", "return"],
        answer: 2
    },
    {
        question: "Which operator is used to compare two values in Java?",
        options: ["=", "==", "!=", "equals"],
        answer: 1
    },
    {
        question: "Which keyword is used to define a constant variable in Java?",
        options: ["const", "final", "static", "define"],
        answer: 1
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "0", "null"],
        answer: 1
    },
    {
        question: "Which class is the parent of all classes in Java?",
        options: ["Main", "Class", "Object", "System"],
        answer: 2
    },
    {
        question: "Which keyword is used to prevent method overriding?",
        options: ["static", "final", "abstract", "private"],
        answer: 1
    },
    {
        question: "Which exception is thrown when a file is not found?",
        options: ["IOException", "FileException", "FileNotFoundException", "FileIOException"],
        answer: 2
    },
    {
        question: "Which collection does not allow duplicate elements?",
        options: ["List", "Set", "Map", "Queue"],
        answer: 1
    },
    {
        question: "Which of the following is not a primitive data type in Java?",
        options: ["int", "boolean", "char", "String"],
        answer: 3
    },
    {
        question: "Which loop guarantees execution at least once?",
        options: ["for", "while", "do-while", "foreach"],
        answer: 2
    },
    {
        question: "Which method is used to start a thread in Java?",
        options: ["start()", "run()", "execute()", "begin()"],
        answer: 0
    },
    {
        question: "Which interface must be implemented to create a thread?",
        options: ["Thread", "Runnable", "Executor", "Callable"],
        answer: 1
    },
    {
        question: "Which keyword is used to throw an exception manually?",
        options: ["throws", "catch", "try", "throw"],
        answer: 3
    },
    {
        question: "Which keyword is used to define an abstract class?",
        options: ["interface", "virtual", "abstract", "extends"],
        answer: 2
    },
    {
        question: "Which access modifier makes members accessible within the same package?",
        options: ["public", "protected", "private", "default"],
        answer: 3
    },
    {
        question: "Which of the following handles multiple exceptions in a single catch?",
        options: ["multi-catch", "union", "multi-try", "nested-catch"],
        answer: 0
    },
    {
        question: "Which version of Java introduced lambda expressions?",
        options: ["Java 6", "Java 7", "Java 8", "Java 9"],
        answer: 2
    },
    {
        question: "What will be the output of: System.out.println(10 + 20 + \"Java\");",
        options: ["30Java", "Java30", "1020Java", "Java1020"],
        answer: 0
    },
    {
        question: "Which of these is not a feature of Java?",
        options: ["Platform Independent", "Object Oriented", "Supports pointers", "Robust"],
        answer: 2
    },
    {
        question: "Which keyword is used for exception handling in Java?",
        options: ["try", "catch", "throw", "All of the above"],
        answer: 3
    },
    {
        question: "Which package contains the Scanner class?",
        options: ["java.util", "java.io", "java.lang", "java.text"],
        answer: 0
    },
    {
        question: "Which method is used to find the length of a string in Java?",
        options: ["length()", "size()", "count()", "getLength()"],
        answer: 0
    },
    {
        question: "Which keyword is used to implement an interface?",
        options: ["extends", "implements", "inherits", "interfaces"],
        answer: 1
    },
    {
        question: "What is the size of a char in Java?",
        options: ["1 byte", "2 bytes", "4 bytes", "Depends on OS"],
        answer: 1
    },
    {
        question: "Which statement is used to stop a loop in Java?",
        options: ["exit", "stop", "break", "end"],
        answer: 2
    },
    {
        question: "Which method is used to convert a string to an integer in Java?",
        options: ["Integer.toInt()", "String.toInt()", "Integer.parseInt()", "parse.Int()"],
        answer: 2
    },
    {
        question: "Which exception is thrown when dividing by zero in Java?",
        options: ["ArithmeticException", "IllegalArgumentException", "DivideByZeroException", "RuntimeException"],
        answer: 0
    },
    {
        question: "Which of the following is not a loop construct in Java?",
        options: ["for", "do-while", "repeat", "while"],
        answer: 2
    },
    {
        question: "Which class is used to create immutable strings?",
        options: ["String", "StringBuilder", "StringBuffer", "CharSequence"],
        answer: 0
    },
    {
        question: "Which of these is a marker interface?",
        options: ["Runnable", "Serializable", "Cloneable", "Both B and C"],
        answer: 3
    },
    {
        question: "Which collection class allows key-value pairs?",
        options: ["List", "Set", "Map", "Queue"],
        answer: 2
    },
    {
        question: "Which access modifier allows access from any class?",
        options: ["default", "protected", "private", "public"],
        answer: 3
    },
    {
        question: "What is the return type of the main() method in Java?",
        options: ["void", "int", "String", "None"],
        answer: 0
    },
    {
        question: "What is the default value of an object reference in Java?",
        options: ["0", "null", "undefined", "None"],
        answer: 1
    },
    {
        question: "What does the 'static' keyword mean in Java?",
        options: [
            "Method or variable belongs to the class",
            "Only one instance per object",
            "Method runs once",
            "Object can't be created"
        ],
        answer: 0
    },
    {
        question: "Which class is used to create dynamic arrays in Java?",
        options: ["ArrayList", "Vector", "LinkedList", "All of the above"],
        answer: 3
    },
    {
        question: "Which method is used to get user input from console?",
        options: ["Scanner.next()", "System.in()", "Scanner.getInput()", "Console.read()"],
        answer: 0
    }
    ],
    c : [
    {
        question: "What is the output of printf(\"%d\", (a = 5, a + 5));?",
        options: ["5", "10", "15", "Error"],
        answer: 1
    },
    {
        question: "Which of the following is a valid variable name in C?",
        options: ["int", "_var", "2var", "float"],
        answer: 1
    },
    {
        question: "Which operator is used to get the remainder in division in C?",
        options: ["/", "*", "%", "//"],
        answer: 2
    },
    {
        question: "What is the size of int on most 32-bit compilers?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
        answer: 1
    },
    {
        question: "Which keyword is used to declare a constant in C?",
        options: ["static", "define", "const", "immutable"],
        answer: 2
    },
    {
        question: "What does printf(\"%c\", 65); print?",
        options: ["A", "65", "Error", "a"],
        answer: 0
    },
    {
        question: "What will this print: int a = 5, b = 10; printf(\"%d\", a > b);",
        options: ["1", "0", "10", "5"],
        answer: 1
    },
    {
        question: "Which header file is needed for printf()?",
        options: ["stdlib.h", "conio.h", "string.h", "stdio.h"],
        answer: 3
    },
    {
        question: "Which of the following is not a storage class in C?",
        options: ["auto", "register", "volatile", "static"],
        answer: 2
    },
    {
        question: "Which data type is used to store a single character?",
        options: ["int", "float", "char", "string"],
        answer: 2
    },
    {
        question: "Which of the following is a loop structure in C?",
        options: ["for", "do", "while", "All of the above"],
        answer: 3
    },
    {
        question: "What is the output of int a = 5; printf(\"%d\", ++a);",
        options: ["5", "6", "4", "Compilation error"],
        answer: 1
    },
    {
        question: "Which format specifier is used for float in printf()?",
        options: ["%f", "%d", "%c", "%lf"],
        answer: 0
    },
    {
        question: "What is the default return type of main() in C?",
        options: ["void", "int", "float", "char"],
        answer: 1
    },
    {
        question: "Which operator has the highest precedence in C?",
        options: ["+", "*", "()", "="],
        answer: 2
    },
    {
        question: "What is the result of 10 / 3 in C (integer division)?",
        options: ["3.33", "3", "0", "Error"],
        answer: 1
    },
    {
        question: "What will sizeof('A') return in C?",
        options: ["1", "2", "4", "Depends on compiler"],
        answer: 2
    },
    {
        question: "How many times will this loop execute? for(int i = 0; i < 5; i++)",
        options: ["4", "5", "6", "Infinite"],
        answer: 1
    },
    {
        question: "Which keyword is used to exit a loop prematurely?",
        options: ["stop", "exit", "break", "continue"],
        answer: 2
    },
    {
        question: "Which of the following is used to comment a single line in C?",
        options: ["/* */", "/**/", "//", "#"],
        answer: 2
    },
    {
        question: "Which of the following functions is used to read a string in C?",
        options: ["scanf", "gets", "fgets", "Both gets and fgets"],
        answer: 3
    },
    {
        question: "What does the continue statement do in a loop?",
        options: ["Stops the program", "Skips rest and continues", "Ends the loop", "Repeats the loop infinitely"],
        answer: 1
    },
    {
        question: "What will be the output of: int a = 2; printf(\"%d\", a == 2);",
        options: ["1", "2", "0", "Error"],
        answer: 0
    },
    {
        question: "What is the correct syntax for a function that returns an integer?",
        options: ["int func()", "void func()", "func int()", "function int()"],
        answer: 0
    },
    {
        question: "Which is the correct way to declare an array of 10 integers?",
        options: ["int arr[10];", "int arr();", "array int[10];", "int arr{};"],
        answer: 0
    },
    {
        question: "Which symbol is used to dereference a pointer in C?",
        options: ["&", "*", "->", "%"],
        answer: 1
    },
    {
        question: "What is the keyword used to define a structure in C?",
        options: ["struct", "structure", "class", "record"],
        answer: 0
    },
    {
        question: "Which header file is used for malloc() and free()?",
        options: ["stdlib.h", "string.h", "malloc.h", "memory.h"],
        answer: 0
    },
    {
        question: "What is the output of: int a = 5, b = 2; printf(\"%d\", a % b);",
        options: ["0", "2", "1", "3"],
        answer: 2
    },
    {
        question: "What is the index of the first element in a C array?",
        options: ["0", "1", "-1", "Depends on declaration"],
        answer: 0
    },
    {
        question: "What is the output of printf(\"%d\", sizeof(int)); on most 32-bit systems?",
        options: ["2", "4", "8", "Depends on compiler"],
        answer: 1
    },
    {
        question: "Which operator is used to access the value of a pointer?",
        options: ["&", "*", "->", "%"],
        answer: 1
    },
    {
        question: "Which of the following functions is used to allocate memory dynamically?",
        options: ["calloc()", "malloc()", "realloc()", "All of the above"],
        answer: 3
    },
    {
        question: "Which keyword is used to define macros in C?",
        options: ["define", "#define", "macro", "#macro"],
        answer: 1
    },
    {
        question: "Which function is used to copy strings in C?",
        options: ["strcopy()", "strcpy()", "copystr()", "strncpy()"],
        answer: 1
    },
    {
        question: "Which of these is not a valid C loop keyword?",
        options: ["for", "repeat", "while", "do"],
        answer: 1
    },
    {
        question: "Which keyword is used to prevent modification of a variable?",
        options: ["immutable", "const", "fixed", "static"],
        answer: 1
    },
    {
        question: "What will be the output: int a = 3; printf(\"%d\", a == 3 && a > 1);",
        options: ["0", "1", "3", "Error"],
        answer: 1
    },
    {
        question: "Which standard library function finds the length of a string?",
        options: ["strlen()", "size()", "count()", "strlength()"],
        answer: 0
    },
    {
        question: "Which escape sequence represents a newline?",
        options: ["\\t", "\\n", "\\b", "\\r"],
        answer: 1
    },
    {
        question: "Which of the following is not a valid data type in C?",
        options: ["int", "real", "float", "char"],
        answer: 1
    },
    {
        question: "What is the output: printf(\"%d\", 3 == 3 == 1);",
        options: ["0", "1", "True", "Error"],
        answer: 1
    },
    {
        question: "What will this print: int a = 5; printf(\"%d\", a += 5);",
        options: ["5", "10", "15", "Error"],
        answer: 1
    },
    {
        question: "What is a pointer in C?",
        options: [
            "A variable that stores value",
            "A variable that stores address",
            "A function that stores address",
            "An operator"
        ],
        answer: 1
    },
    {
        question: "What does the `->` operator do in C?",
        options: [
            "Access array elements",
            "Dereference pointer to structure",
            "Increment pointer",
            "Bitwise right shift"
        ],
        answer: 1
    },
    {
        question: "Which function is used to compare two strings in C?",
        options: ["strcmp()", "strcompare()", "compare()", "streq()"],
        answer: 0
    },
    {
        question: "How are string literals stored in C?",
        options: ["char array", "int array", "pointer to int", "file"],
        answer: 0
    },
    {
        question: "Which of these is a ternary operator?",
        options: ["?", ":", "?:", "&&"],
        answer: 2
    },
    {
        question: "Which operator is used to assign a value?",
        options: ["==", "!=", "=", "==="],
        answer: 2
    },
    {
        question: "What is the maximum number of characters in a C character constant?",
        options: ["1", "2", "3", "Unlimited"],
        answer: 0
    }

],

    mongodb: [
       {
        question: "Which command is used to show all databases in MongoDB shell?",
        options: ["show dbs", "show databases", "list dbs", "db.show()"],
        answer: 0
    },
    {
        question: "What is the default port for MongoDB?",
        options: ["3306", "27017", "8080", "5432"],
        answer: 1
    },
    {
        question: "Which command is used to switch to a specific database?",
        options: ["use db_name", "switch db_name", "db use db_name", "select db_name"],
        answer: 0
    },
    {
        question: "What is the command to see all collections in the current database?",
        options: ["show collections", "list collections", "db.show()", "get collections"],
        answer: 0
    },
    {
        question: "What data format does MongoDB use to store documents?",
        options: ["XML", "JSON", "BSON", "CSV"],
        answer: 2
    },
    {
        question: "Which command inserts a document in MongoDB?",
        options: ["db.collection.insertOne()", "db.collection.add()", "insert.document()", "db.insert()"],
        answer: 0
    },
    {
        question: "Which method is used to find all documents in a collection?",
        options: ["db.collection.findAll()", "db.collection.find()", "db.collection.get()", "db.find()"],
        answer: 1
    },
    {
        question: "Which operator is used to match documents where a field is greater than a value?",
        options: ["$lt", "$lte", "$gt", "$gte"],
        answer: 2
    },
    {
        question: "How do you delete all documents from a collection?",
        options: ["db.collection.drop()", "db.collection.removeAll()", "db.collection.deleteMany({})", "db.collection.clear()"],
        answer: 2
    },
    {
        question: "Which command is used to remove a collection?",
        options: ["drop collection", "db.collection.remove()", "db.collection.drop()", "delete collection"],
        answer: 2
    },
    {
        question: "Which of the following is true about MongoDB?",
        options: [
            "It is a relational database",
            "It stores data in tabular form",
            "It uses SQL syntax",
            "It is a NoSQL database"
        ],
        answer: 3
    },
    {
        question: "Which field is automatically created by MongoDB in every document?",
        options: ["_doc", "id", "_id", "object_id"],
        answer: 2
    },
    {
        question: "Which command is used to update a single document in MongoDB?",
        options: ["updateOne()", "modify()", "editOne()", "changeOne()"],
        answer: 0
    },
    {
        question: "Which operator is used to set a new value to a field during update?",
        options: ["$update", "$set", "$change", "$modify"],
        answer: 1
    },
    {
        question: "How is an embedded document represented in MongoDB?",
        options: ["As a string", "As an object", "As an array", "As a reference"],
        answer: 1
    },
    {
        question: "What command do you use to create an index on a field?",
        options: ["db.createIndex()", "db.collection.index()", "db.collection.ensureIndex()", "db.collection.createIndex()"],
        answer: 3
    },
    {
        question: "Which aggregation stage is used to group documents?",
        options: ["$sort", "$match", "$group", "$filter"],
        answer: 2
    },
    {
        question: "What type of database is MongoDB?",
        options: ["Column-oriented", "Document-oriented", "Key-value store", "Graph-based"],
        answer: 1
    },
    {
        question: "Which method is used to count the number of documents in a collection?",
        options: ["db.collection.count()", "db.collection.length()", "db.collection.total()", "db.collection.size()"],
        answer: 0
    },
    {
        question: "Which of the following is a valid MongoDB data type?",
        options: ["varchar", "number", "float", "ObjectId"],
        answer: 3
    },
    {
        question: "Which MongoDB command returns a single document that matches a query?",
        options: ["findOne()", "findFirst()", "findSingle()", "getOne()"],
        answer: 0
    },
    {
        question: "Which method is used to limit the number of documents returned?",
        options: ["db.collection.limit()", "db.collection.take()", "db.collection.first()", "db.collection.max()"],
        answer: 0
    },
    {
        question: "Which of the following is used to sort the result of a query?",
        options: ["$sort", "sort()", "orderBy()", "db.sort()"],
        answer: 1
    },
    {
        question: "Which operator is used to match multiple conditions (AND logic)?",
        options: ["$or", "$nor", "$and", "$all"],
        answer: 2
    },
    {
        question: "Which operator is used to match at least one condition (OR logic)?",
        options: ["$and", "$match", "$or", "$any"],
        answer: 2
    },
    {
        question: "Which MongoDB command creates a new user?",
        options: ["db.createUser()", "db.addUser()", "db.newUser()", "db.userAdd()"],
        answer: 0
    },
    {
        question: "In MongoDB, which of the following is not a valid data type?",
        options: ["ObjectId", "Date", "Blob", "Array"],
        answer: 2
    },
    {
        question: "Which command is used to drop a database?",
        options: ["drop database", "db.dropDatabase()", "delete database", "remove database"],
        answer: 1
    },
    {
        question: "What is the purpose of `ObjectId` in MongoDB?",
        options: ["To store file paths", "To identify a database", "To uniquely identify a document", "To encrypt data"],
        answer: 2
    },
    {
        question: "Which stage in aggregation is used to filter documents?",
        options: ["$project", "$sort", "$match", "$limit"],
        answer: 2
    },
    {
        question: "What is the maximum document size in MongoDB (as of v6.0)?",
        options: ["4MB", "8MB", "16MB", "32MB"],
        answer: 2
    },
    {
        question: "Which of the following is true about MongoDB collections?",
        options: [
            "They are schema-less",
            "They require fixed column types",
            "They store only JSON files",
            "They cannot store arrays"
        ],
        answer: 0
    },
    {
        question: "What command is used to rename a collection?",
        options: ["rename()", "db.collection.renameCollection()", "db.rename()", "db.collection.rename()"],
        answer: 3
    },
    {
        question: "Which function in MongoDB is used for full-text search?",
        options: ["$regex", "$text", "$match", "$find"],
        answer: 1
    },
    {
        question: "What command is used to create a capped collection?",
        options: ["db.createCapped()", "db.createCollection(..., { capped: true })", "db.newCapped()", "db.makeCapped()"],
        answer: 1
    },
    {
        question: "What does the `$project` stage do in an aggregation pipeline?",
        options: ["Removes documents", "Filters documents", "Limits fields returned", "Sorts documents"],
        answer: 2
    },
    {
        question: "Which MongoDB feature supports multi-document ACID transactions?",
        options: ["replica sets", "sharding", "transactions", "journaling"],
        answer: 2
    },
    {
        question: "Which is used to update multiple documents at once?",
        options: ["updateOne()", "updateMany()", "updateAll()", "bulkUpdate()"],
        answer: 1
    },
    {
        question: "Which method returns true if a collection exists?",
        options: ["db.collection.exists()", "db.getCollectionNames().includes()", "db.collection.isDefined()", "db.hasCollection()"],
        answer: 1
    },
    {
        question: "Which operator is used to check if a field exists?",
        options: ["$has", "$exists", "$check", "$field"],
        answer: 1
    }
    
    ],
    python: [
        {
        question: "What is the output of print(type([])) in Python?",
        options: ["<class 'list'>", "<type 'list'>", "list", "ListType"],
        answer: 0
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        answer: 1
    },
    {
        question: "What is the output of: print(2 ** 3)?",
        options: ["5", "6", "8", "9"],
        answer: 2
    },
    {
        question: "Which of the following is used to define a block of code in Python?",
        options: ["Braces {}", "Parentheses ()", "Indentation", "Begin-End"],
        answer: 2
    },
    {
        question: "What is the correct file extension for Python files?",
        options: [".pt", ".pyth", ".py", ".p"],
        answer: 2
    },
    {
        question: "Which data type is immutable in Python?",
        options: ["List", "Set", "Dictionary", "Tuple"],
        answer: 3
    },
    {
        question: "Which keyword is used to handle exceptions in Python?",
        options: ["catch", "except", "try", "handle"],
        answer: 1
    },
    {
        question: "What is the output of print(bool(0))?",
        options: ["True", "False", "0", "Error"],
        answer: 1
    },
    {
        question: "Which function is used to get input from the user in Python?",
        options: ["get()", "read()", "input()", "scanf()"],
        answer: 2
    },
    {
        question: "What is the output of: print(5 // 2)?",
        options: ["2.5", "2", "3", "Error"],
        answer: 1
    },
    {
        question: "How do you start a comment in Python?",
        options: ["//", "/*", "#", "--"],
        answer: 2
    },
    {
        question: "What will be the value of x after this: x = [1, 2, 3]; x.append(4)?",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 4]", "[1, 2, 3, 4, 4]"],
        answer: 1
    },
    {
        question: "Which of these is not a valid Python data structure?",
        options: ["list", "set", "array", "dictionary"],
        answer: 2
    },
    {
        question: "What is the output of len('Python')?",
        options: ["6", "5", "7", "Error"],
        answer: 0
    },
    {
        question: "What is used to define a class in Python?",
        options: ["function", "object", "define", "class"],
        answer: 3
    },
    {
        question: "Which method is used to remove an item from a list?",
        options: ["delete()", "remove()", "discard()", "cut()"],
        answer: 1
    },
    {
        question: "Which of the following is used to create a virtual environment in Python?",
        options: ["venv", "virtual", "env", "pip install venv"],
        answer: 0
    },
    {
        question: "Which operator is used to check identity?",
        options: ["==", "!=", "is", "in"],
        answer: 2
    },
    {
        question: "What will this return: type('10')?",
        options: ["<class 'int'>", "<class 'str'>", "<type 'int'>", "<type 'str'>"],
        answer: 1
    },
    {
        question: "Which of the following is used to iterate over a sequence?",
        options: ["for", "loop", "repeat", "while"],
        answer: 0
    },
    {
        question: "Which keyword is used to define a class in Python?",
        options: ["object", "define", "class", "function"],
        answer: 2
    },
    {
        question: "What is the output of: print(type({}))?",
        options: ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"],
        answer: 0
    },
    {
        question: "What is the result of: 'abc' + '123'?",
        options: ["abc123", "abc 123", "Error", "None"],
        answer: 0
    },
    {
        question: "Which function is used to convert a string to lowercase?",
        options: ["lower()", "tolower()", "str.lower()", "All of the above"],
        answer: 3
    },
    {
        question: "Which of the following is a Python tuple?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
        answer: 2
    },
    {
        question: "Which module in Python is used for regular expressions?",
        options: ["regex", "re", "exp", "rex"],
        answer: 1
    },
    {
        question: "What is the result of 3 * 1 ** 3?",
        options: ["3", "1", "9", "0"],
        answer: 0
    },
    {
        question: "Which method is used to find the index of an element in a list?",
        options: ["index()", "find()", "search()", "locate()"],
        answer: 0
    },
    {
        question: "Which keyword is used to define a generator in Python?",
        options: ["yield", "return", "generate", "next"],
        answer: 0
    },
    {
        question: "Which function is used to sort a list in ascending order?",
        options: ["sort()", "order()", "arrange()", "sequence()"],
        answer: 0
    },
    {
        question: "What is the purpose of pass in Python?",
        options: [
            "To pass control to another function",
            "To exit a function",
            "To act as a placeholder with no action",
            "To skip iteration"
        ],
        answer: 2
    },
    {
        question: "Which Python statement is used to handle exceptions?",
        options: ["except", "try", "finally", "All of the above"],
        answer: 3
    },
    {
        question: "What is the output of: bool([])?",
        options: ["True", "False", "None", "Error"],
        answer: 1
    },
    {
        question: "Which method is used to add an item to a set?",
        options: ["append()", "add()", "push()", "insert()"],
        answer: 1
    },
    {
        question: "Which Python function returns the length of a list?",
        options: ["length()", "size()", "len()", "count()"],
        answer: 2
    },
    {
        question: "Which symbol is used for floor division in Python?",
        options: ["/", "//", "%", "**"],
        answer: 1
    },
    {
        question: "How do you open a file for writing in Python?",
        options: ["open('file.txt', 'w')", "open('file.txt')", "file('file.txt')", "write('file.txt')"],
        answer: 0
    },
    {
        question: "What is the output of: 10 % 3?",
        options: ["1", "0", "3", "10"],
        answer: 0
    },
    {
        question: "Which function is used to get all the keys in a dictionary?",
        options: ["getkeys()", "keys()", "all_keys()", "dict.keys()"],
        answer: 1
    },
    {
        question: "Which data type is used to store key-value pairs?",
        options: ["list", "tuple", "dictionary", "set"],
        answer: 2
    }
    ]
};

export default questions;