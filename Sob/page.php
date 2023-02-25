<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Sob
 */

get_header();
?>

	<main id="primary" class="site-main">

	<div class="content">
        <div class="content__calendar">
            <div class="calendar-wrapper">
                <button id="btnPrev" type="button">Предыдущий</button>
                <button id="btnNext" type="button">Следующий</button>
            <div id="divCal"></div>
            </div>
        </div>
        <div class="content__block">
            <h1>События</h1>
            <div class="card">
                <div class="card__sobitie" id="Sobitie1">
                    <div class="card__img">
                        <img class="img--fonCard" src="<?php echo get_field("img_title") ?>">
                        <input type="checkbox" class="checkbox" onchange="chek1()" name="Sobitie-1" id="rules1">
                    </div>
                    <div class="card___text">
                        <h4><b><?php echo get_field("sob_title") ?></b></h4>
                        <p class="text">
                            <img class="text__imgCal" src="<?php echo get_field("img_cal") ?>">
                            <span><?php echo get_field("sob_date") ?></span>
                        </p>
                        <p class="text">
                            <img class="text__imgMap" src="<?php echo get_field("img_point") ?>">
                            <span><?php echo get_field("sob_place") ?></span>
                        </p>
                    </div>
                </div>
                <div class="card__sobitie" id="Sobitie2">
                    <div class="card__img">
                        <img class="img--fonCard" src="<?php echo get_field("img_title") ?>">
                        <input type="checkbox" class="checkbox" onchange="chek2()" name="Sobitie-2" id="rules2">
                    </div>
                    <div class="card___text">
                        <h4><b><?php echo get_field("sob_title") ?></b></h4>
                        <p class="text">
                            <img class="text__imgCal" src="<?php echo get_field("img_cal") ?>">
                            <span><?php echo get_field("sob_date") ?></span>
                        </p>
                        <p class="text">
                            <img class="text__imgMap" src="<?php echo get_field("img_point") ?>">
                            <span><?php echo get_field("sob_place") ?></span>
                        </p>
                    </div>
                </div>
                <div class="card__sobitie" id="Sobitie3">
                    <div class="card__img">
                        <img class="img--fonCard" src="<?php echo get_field("img_title") ?>">
                        <input type="checkbox" class="checkbox" onchange="chek3()" name="Sobitie-3" id="rules3">
                    </div>
                    <div class="card___text">
                        <h4><b><?php echo get_field("sob_title") ?></b></h4>
                        <p class="text">
                            <img class="text__imgCal" src="<?php echo get_field("img_cal") ?>">
                            <span><?php echo get_field("sob_date") ?></span>
                        </p>
                        <p class="text">
                            <img class="text__imgMap" src="<?php echo get_field("img_point") ?>">
                            <span><?php echo get_field("sob_place") ?></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__sobitie" id="Sobitie4">
                    <div class="card__img">
                        <img class="img--fonCard" src="<?php echo get_field("img_title") ?>">
                        <input type="checkbox" class="checkbox" onchange="chek4()" name="Sobitie-4" id="rules4">
                    </div>
                    <div class="card___text">
                        <h4><b><?php echo get_field("sob_title") ?></b></h4>
                        <p class="text">
                            <img class="text__imgCal" src="<?php echo get_field("img_cal") ?>">
                            <span><?php echo get_field("sob_date") ?></span>
                        </p>
                        <p class="text">
                            <img class="text__imgMap" src="<?php echo get_field("img_point") ?>">
                            <span><?php echo get_field("sob_place") ?></span>
                        </p>
                    </div>
                </div>
                <div class="card__sobitie" id="Sobitie5">
                    <div class="card__img">
                        <img class="img--fonCard" src="<?php echo get_field("img_title") ?>">
                        <input type="checkbox" class="checkbox" onchange="chek5()" name="Sobitie-5" id="rules5">
                    </div>
                    <div class="card___text">
                        <h4><b><?php echo get_field("sob_title") ?></b></h4>
                        <p class="text">
                            <img class="text__imgCal" src="<?php echo get_field("img_cal") ?>">
                            <span><?php echo get_field("sob_date") ?></span>
                        </p>
                        <p class="text">
                            <img class="text__imgMap" src="<?php echo get_field("img_point") ?>">
                            <span><?php echo get_field("sob_place") ?></span>
                        </p>
                    </div>
                </div>
                <div class="card__sobitie" id="Sobitie6">
                    <div class="card__img">
                        <img class="img--fonCard" src="<?php echo get_field("img_title") ?>">
                        <input type="checkbox" class="checkbox" onchange="chek6()" name="Sobitie-6" id="rules6">
                    </div>
                    <div class="card___text">
                        <h4><b><?php echo get_field("sob_title") ?></b></h4>
                        <p class="text">
                            <img class="text__imgCal" src="<?php echo get_field("img_cal") ?>">
                            <span><?php echo get_field("sob_date") ?></span>
                        </p>
                        <p class="text">
                            <img class="text__imgMap" src="<?php echo get_field("img_point") ?>">
                            <span><?php echo get_field("sob_place") ?></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__sobitie" id="Sobitie7">
                    <div class="card__img">
                        <img class="img--fonCard" src="<?php echo get_field("img_title") ?>">
                        <input type="checkbox" class="checkbox"onchange="chek7()" name="Sobitie-7" id="rules7">
                    </div>
                    <div class="card___text">
                        <h4><b><?php echo get_field("sob_title") ?></b></h4>
                        <p class="text">
                            <img class="text__imgCal" src="<?php echo get_field("img_cal") ?>">
                            <span><?php echo get_field("sob_date") ?></span>
                        </p>
                        <p class="text">
                            <img class="text__imgMap" src="<?php echo get_field("img_point") ?>">
                            <span><?php echo get_field("sob_place") ?></span>
                        </p>
                    </div>
                </div>
                <div class="card__sobitie" id="Sobitie8">
                    <div class="card__img">
                        <img class="img--fonCard" src="<?php echo get_field("img_title") ?>">
                        <input type="checkbox" class="checkbox" onchange="chek8()" name="Sobitie-8" id="rules8">
                    </div>
                    <div class="card___text">
                        <h4><b><?php echo get_field("sob_title") ?></b></h4>
                        <p class="text">
                            <img class="text__imgCal" src="<?php echo get_field("img_cal") ?>">
                            <span><?php echo get_field("sob_date") ?></span>
                        </p>
                        <p class="text">
                            <img class="text__imgMap" src="<?php echo get_field("img_point") ?>">
                            <span><?php echo get_field("sob_place") ?></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="button">
                <div class="one">
					<p>Показано 6 из 120</p>
                    <button class="but" id="one">Загрузить еще</button>
                </div>
                <div class="block_button">
						<p>Выбрано 2 из 6 </p>
					<div class="block_button_text">
                    	<input type="button" class="but" onclick="check();" name="two" id="two" value="Выбрать все">
                    	<input type="button" class="but" onclick="multi();" name="three" id="three" value="Импорт">
					</div>
                </div>
            </div>
        </div>
    </div>

	</main><!-- #main -->

<?php
get_footer();
