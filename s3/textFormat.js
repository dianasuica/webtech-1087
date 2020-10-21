const sampleString ='i found a {0} at the {1}'
const sampleFormat =['car','dealership']

const formatString = (input,format) => {

//  return input.substring(0,input.indexOf("{"))  + format[0]
//   + input.substring(input.indexOf("}")+1,input.indexOf("1")-1) 
//    + format[1];

    let result = input;
    for(let i=0; i < format.length;i++)
    {
        result = result.replace('{' + i + '}',format[i])
    }
    return result;


}

console.log(formatString(sampleString,sampleFormat))