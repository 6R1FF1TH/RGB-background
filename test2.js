function calculate(){
    let input1 = document.getElementById('blaka559')
    let value1 = input1.value
    let arr = value1.split(',')
    let arrNum = arr.map(Number)
    let sum = 0 
    for(let i = 0; i < arrNum.length; i++){
        sum += arrNum[i]
        if(arrNum[i] > 90){
            console.log('A')
        }
        else if(arrNum[i] > 80){
            console.log('B')
        }
        else if(arrNum[i] > 70){
            console.log('C')
        }
        else if(arrNum[i] > 60){
            console.log('D')
        }
        else if(arrNum[i] < 60){
            console.log('F')
        }
    }
    let avg = sum / arrNum.length
    console.log(avg.toFixed(2))
    
}


