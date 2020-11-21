const Skills = ()=>{
    return (
        <div>

<div id="skill" class="py-2">

<div class="row my-2">
    <p class="skill_title"> SKILL </p>
</div>

<div class="skill_box mx-auto py-2 ">
    <div class="row">
        <div class="py-4" id="android">
            <i class="fab fa-react"></i> <span class="px-2">React Js</span>
        </div>
        <div class="" id="html">
            <i class="fab fa-node"></i>
            <span class="px-2">Node Js</span>
        </div>

        <div class="" id="css">
            <i class="fa fa-database"> </i> <span class="px-2">MongoDB</span>
        </div>

    </div>

    <div class="d-flex flex-column   flex_container_1">
        <div class=" d-flex flex-column py-2 flex_container_1" id="js">
            <i class="fab fa-android"></i>
            <span class="py-2">Android</span>

        </div>
        <div class="  d-flex flex-column  py-2 flex_container_1" id="java">
            <i class="fab fa-java"></i> <span class="py-2">JAVA</span>
        </div>

    </div>
    <div class="d-flex flex-column justify-content-center py-2" id="web">
        <i class="fa fa-globe"></i> <span class="py-2">WEB Development</span>
    </div>

    <div class="  d-flex flex-column flex_container_1 ">
        <div class="d-flex justify-content-center   flex-column py-2 flex_container_1" id="mysql">
            <i class="fas fa-server"></i> <span class="py-2">MySql</span>
        </div>
        <div class="  d-flex flex-column justify-content-center py-2 flex_container_1" id="laravel">
 
            <i class="fab fa-aws"></i>
            <span class="py-2">Aws</span>
        </div>
    </div>

</div>
 

</div>
        </div>
    );
}
export default Skills;