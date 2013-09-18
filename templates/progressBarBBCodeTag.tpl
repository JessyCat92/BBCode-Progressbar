
<div id="progressbar_{$id}" class="progressbar_main" style="width:calc({@$width} - 2px); height:{@$height}px;" >
    <div class="progress_label" style="color:{@$color}">{@$content}</div>
    <div class="prograssbar_inner" style="width: calc({@$fill}% + 2px); height:{@$height+1}px; background-color:{@$bgcolor};" ></div>
</div>

<script data-relocate="true">
    $(document).ready(function(){
        if($("#progressbar_{$id}").width()<5){
            $("#progressbar_{$id}").width(100);
        }


    });

</script>