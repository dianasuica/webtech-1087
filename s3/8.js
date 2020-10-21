const dictionary = ['the','quick','brown','fox','jump','over',
'the','lazy','dog']

const sampleString = `
best
read
on
windy
nights
`

const checkAcrostih = (input,dict) =>{

    const lines = input.split('\n')
    let result=''
    for (const line of lines)
    {
        if(line.trim()){
            console.log(line + " | " + line.trim() )
            result += line.trim()[0]
        }
    }
    if(dict.indexOf(result) !== -1)
    return true
  else
    return false
}


console.log(checkAcrostih(sampleString,dictionary))