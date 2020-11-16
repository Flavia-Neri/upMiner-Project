<template>
	<section class="slide">
		<splide :options="options">
			<splide-slide>
				<div class="figures">
					<figure>
						<p><img :src="require('../assets/cap.jpg')" alt="Histórico Empresarial">
							<figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
								smod tempor incididunt ut labore et dolore magna aliqua.</figcaption>
					</figure>
					<figure>
						<p><img :src="require('../assets/cap.jpg')" alt="Histórico Empresarial">
							<figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
								smod tempor incididunt ut labore et dolore magna aliqua.</figcaption>
					</figure>
				</div>
			</splide-slide>
			<splide-slide>
				<div class="figures">
					<figure>
						<p><img :src="require('../assets/cap.jpg')" alt="Histórico Empresarial">
							<figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
								smod tempor incididunt ut labore et dolore magna aliqua.</figcaption>
					</figure>
					<figure>
						<p><img :src="require('../assets/cap.jpg')" alt="Histórico Empresarial">
							<figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
								smod tempor incididunt ut labore et dolore magna aliqua.</figcaption>
					</figure>
				</div>
			</splide-slide>
			<splide-slide>
				<div class="figures">
					<figure>
						<p><img :src="require('../assets/cap.jpg')" alt="Histórico Empresarial">
							<figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
								smod tempor incididunt ut labore et dolore magna aliqua.</figcaption>
					</figure>
					<figure>
						<p><img :src="require('../assets/cap.jpg')" alt="Histórico Empresarial">
							<figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
								smod tempor incididunt ut labore et dolore magna aliqua.</figcaption>
					</figure>
				</div>
			</splide-slide>
		</splide>
	</section>
</template>


<style lang="scss">
	.slide {
		width: 100%;
		display: flex;
		justify-content: center;

		.figures {
			display: flex;

			figure {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-right: 40px;
				padding: 15px;
				box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.06);

				img {
					width: 460px;
					height: 210px;
					object-fit: cover;
					border-radius: 5px;
				}

				figcaption {
					width: 430px;
					text-align: left;
					font-size: 15px;
					color: #f0690a;
					font-weight: 400;
				}
			}
		}

		.splide__arrows {
			button {
				background: transparent;

				svg {
					width: 64px;
					height: 64px;
				}
			}

			.splide__arrow--prev {
				left: -55px;
			}

			.splide__arrow--next {
				right: -55px;
			}
		}
	}
</style>



<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

	export default {
	components: {
		Splide,
		SplideSlide,
	},
	data() {
		return {
			options: {
			rewind : true,
			width  : 1020,
			type   : "loop",
			autoplay: true,
			interview:500,
			pagination:false,
			arrowPath:"m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"
			},
		};
		},
		mounted(){
			this.$el.querySelectorAll(".splide__arrow svg").forEach(svg=>svg.setAttribute("viewBox","0 0 64 64"));
		}
	}
</script>