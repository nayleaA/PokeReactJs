export function formatName(name:String): String{
    if(name.includes("♀")){
        return name.replace("♀","-f");
    }
    else if(name.includes("♂")){
        return name.replace("♂","-f");
    }
    else if(name.includes("♂")){
        return name.replace("♂","-m");
    }
    else if(name.includes(".")){
        return name.replace(".","-");
    }
    else if(name.includes("farfetch'd")){
        return name.replace("farfetch'd","farfetchd");
    } 
    else if(name.includes("Mr. Mime")){
        return name.replace("Mr. Mime","Mr.Mime");
    } else return name;
    
}

export function waitFor(time:number): Promise<void>{
    return new Promise((resolve)=> setTimeout(resolve,time))
}