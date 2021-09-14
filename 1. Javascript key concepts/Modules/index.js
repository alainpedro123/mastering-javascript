import Teacher, { promote } from './Teacher';

// creating a teacher object
const teacher = new Teacher("Fernando", "MSc");
teacher.teach();

// Module - spliting the across multiple files, and we call each file a module. This is called modularity.


/* 
    DEFAULT AND NAMED EXPORT

    Default -> import ... from '';  ** to export only a single object
    Named -> import { ... } from '';  ** to export one or more object from a given module

*/