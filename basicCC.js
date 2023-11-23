const {Contract}=require('fabric-contract-api');

class testContract extends Contract{
    //functions goes here

    //creating an object to store marks of a student in each subject and storing this obj as a value and key as studentId
    async addMarks(ctx, studentId, subject1, subject2, subject3){
        let marks={
            subj1:subject1,
            subj2:subject2,
            subj3:subject3
        };
        await ctx.stub.putState(studentId, Buffer.from(JSON.stringify(marks)));  //await used to make function wait from execution until the condition inside it getting fullfilled

        console.log('Student Marks added to the ledger Successfully...');
    }

    //Delete Marks
    async deleteMarks(ctx, studentId){
        await ctx.stub.deleteState(studentId);

        console.log('Student Marks deleted from ledger Successfully...');
    }

    //Query student marks
    async queryMarks(ctx, studentId){
        let marksAsBytes=await ctx.stub.getState(studentId);
        if (!marksAsBytes || marksAsBytes.toString().length<=0){
            throw new Error('Student with this ID does not exist: ');

        }
        let marks=JSON.parse(marksAsBytes.toString());
        return JSON.stringify(marks);
    }
}