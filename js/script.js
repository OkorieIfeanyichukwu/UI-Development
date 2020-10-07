function onchange(e){
    if(e.currentTarget.value==='default'){
        window.location.reload(true);
    }
}

document.getElementById('default').addEventListener('change',onchange);




    function pressed(){
        var p ;
        p=document.getElementById('col-sm-3');
        if(p.style.display==='block'){
            p.style.display='none';
        }
        else {
            p.style.display='block';
        }
    }

    function hovered(){
        var p;
        var title1;
        var title2;
        p=document.getElementById('col-sm-3');
        if(p.style.display==='block'){
            title2="";
            title1="click panel to collapse";
            $('#panel-collapse').attr('title',title1).tooltip();
        }
        else {
            title1="";
            title2="View Comment";
            $('#panel-collapse').attr('title',title2).tooltip();
        }
    }