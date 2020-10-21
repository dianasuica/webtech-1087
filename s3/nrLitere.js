const sampleString = 'the quick brown fox jumps over the dog'


const getFrequenciesLetters = (input) => {

   // let items = input.split(/[\s,]/)  //daca nu vrem sa luam in calcul punctuatia
    const result2={}
    const punctuation = [' ',', ','.', ',',' ,']
   // for(const item of items)
   // {
        for(const letter of input) //input in loc de items ca sa ia si semnele de punctuatie
        {
            if(punctuation.indexOf(letter) === -1) //daca nu gaseste letter in vectorul punctuation
            {
                if(letter in result2)
                {
                   result2[letter]++;
                }else
                {
                   result2[letter]=1;
                }
           }

       }

            
        
   // }
    // for(const word in result2)
    // {
    //     result2[word] /= input.length
    // }
     return result2
}
console.log(getFrequenciesLetters(sampleString))



