// kkkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkkOOOOkkkkOOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxx
// kOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkOOOOOOOkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxk
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkkkOOOOOOOOOkkkkkkkkkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkkkkkkxxxdddddxkkOOOOOkkkkkkkkkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOOOOOOOOOOOOOOOkkkkkkkkkxdl:c:;,''..'',:oxkkkkkOkkkkkkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOOOOOOOOOOOOkkxdolllcclll:'..          ..':oxkkOOOkkkkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOOOOOOOOOOkxl:,'..........              ....;okOkkkkkkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOOOOOOOOkd:'......                     .......:xkkkkOkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOOOOOOOko,.....                         .......'lkOOOkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOOOOOOkd,.....                          .........:kOOkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOOOOkkk:'.. .    . ..'''.     ....................lkOOOkkkkkkkkkkkkkkkk
// OOOOOOOOOOOkkkkx:.....   ...;::::,.... ....................,xkkkkkkkkkkkkkkkkkkk
// OOOOOOOOOOkkkkkxc.. . .....;clllcc;'........................dOOkkkkkkkkkkkkkkkkk
// OOOOOOOOOOkkkkkxc.... ....,:clooolc:,,,'....................;kOOOkkkkkkkkkkkkkkk
// OOOOOOOOOkkkkkkxc..... ..':cllooooolc;c:'......''............oOOOOkkkkkkkkkkkkkk
// OOOOOOOOOkkkkkkxc... . ..,:cloooddxdocllc'...;;;;.......   ..lOOOOOkkkkkkkkkkkkk
// OOOOOOOOOkkkkkxxd'.... ..:cllodddxxxdoodo::lcoolc:;'.,,..  ..dOOOOOOkkkkkkkkkkkk
// OOOOOOOOkkkkkkxxx;.... .,cllloddxxxkkkkkkdxkOOkxxdollol;.. .ckOOOOOOOkkkkkkkkkkk
// OOOOOOOOkkkkkxxxx:... .,:cllllolodxkOOOOOOOOOOOOkxdooool:..'xkOOOOOOkkkkkkkkkkkk
// OOOOOOOOkkkkkxxxxo..  .:ccllccc:::::ldxkkOOOOkxdc:;;::clc'.ckOOOOOOOOkkkkkkkkkkk
// OOOOOOOOOkkkkxxxdd,.  .:clclloooddollloddxkkdoollooddolll,'xOOOOOOOkkkkkkkkkkkkk
// OOOOOOOOOkkkxxxdccc,..':cllccccccllllllodxkxoooolclllllll,cokOOOOOOOkkkkkkkkkkkk
// OOOOOOOOkkkxxxxdcc:c;.,::cclc:::',clcllcoxkdclol:,;oc:lllc;ckOOOOOOOkkkkkkkkkkkk
// OOOOOOOkkkkxxxxddlccc,.:loooollooooodxoldOOxlodddooooddddldkOOOOOOOOkkkkkkkkkkkk
// OOOOOOOkkkkxxxddddlccc';cloddddddddxkxddxO0OxxxxddddxxxdoxOOOOOOOOkkkkkkkkkkkkkk
// OOOOOOkkkkkxxxddddolcc::clodxxkkkkOkxddxkOK0kxxkkkkkkkxdxOOOOOOOOOkkkkkkkkkkkkkk
// OOOOOkkkkkxxxxddddoolccccclodxxkkkkkdddxk0K0OkxxkkkkxxdokOOOOOOkkkkkkkkkkkkkkkkk
// OOOkkkkkkkxxxxddddoool::;cclodxxkkkxldxxxk0OkxxxkkxxxdoxOOOOOOOkkkkkkkkkkkkkkkkk
// OOkkkkkkkxxxxxddddooodoo:ccloddxkOOkooooooodoookOkxxdookOOOOOOkkkkkkkkkkkkkkkkkk
// kkkkkkkkkxxxxxddddooddddc:clloddxkkkxdddxxxxddxkkkxddodOOOOOOOOkkkkkkkkkkkkkkkkk
// kkkkkkkkxxxxxxddddooodool;:clloodxddddddddddoooooxxdookOOOOOOOkkkkkkkkkkkkkkkkkk
// kkkkkkkxxxxxxdddddooooooo:;::cclooollccllllllooxdddookOOOOOOOOkkkkkkkkkkkkkkkkkk
// kkkkkkxxxxxxddddddooool:;.,:;:ccloddddooooodxxxxdolokkkkOOOOkkkkkkkkkkkkkkkkkkkx
// kkkkxxxxxxxxdddddoolc;'....:::::clloooddxxxxxdddoldkkkkkkkkkkkkkkkkkkkkkkkkkkkxx
// xxxxxxxxxxxdddddool;'....;,:ccc::cloooooooodooool;:oxkkkkkkkkkkkkkkkkkkkkkkkxxxx
// xxxxxxxxxxddddooooc'....':;:ccllcccclllllllloolc:..';cdkkkkkkkkkkkkkkkkkkkkxxxxx
// xxxxxxxxdol:;;,,,,'..',,':l:cclllllcccccccllcccllc:,...,:coodxkkkkkkkkkkkxxxxxxx
// xddooool:'.............'.'coclddooooolllloolllllloxd:...'',;,;cdxkkkkkkxxxxxxxxx
// l:,''''....................,:ldOOkddddooooolloolcccodc,:;';;''''cxxxxxxxxxxxxxxx
// ''............................';okOxddddddooooolcll:oxc::,....''';ldxxxxxxxxxxxx
//
//               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           信冯神        无bug
//
function dealFile(filePath) {

    if(!fs.existsSync(filePath)){
        console.log("file not exist :" + filePath);
    }else{
        fs.readFile(filePath,function(err,data){
            if(err) throw err;

            //add comment prefix
            var commentData = isUtf8(data) ? commentContent_forUTF8 : commentContent;
            var lineArr     = commentData.split("\n");
            lineArr.map(function(line,index){
                lineArr[index] = configItem.prefix + line;
            });
            var currentComment  = new Buffer(lineArr.join("\n") + "\n"); //TODO :cache this result

            process.stdout.write("--> " + filePath + "...");
            var finalResult = buffer.concat([currentComment,data]);
            fs.unlinkSync(filePath);
            fs.writeFileSync(filePath,finalResult)
            process.stdout.write("done\r\n");
        });
    }
}
