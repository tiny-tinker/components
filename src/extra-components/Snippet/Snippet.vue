<template>
  <div class="snippet">
    <div class="snippet-code" v-bind:class="[
						{[`snippet-${effect}`]: effect},
						{'snipppet-transparent': transparent},
						{[`bg-${type}`]: type},
						{'rounded': round},
						{[`snippet-${size}`]: size},
						{'snippet-center': center},
            {'snippet-fixed-height': fixedHeight}
					]">
      <div class="snippet-prepend">
        <slot name="snippet-prepend">
          <div class="snippet-text" v-bind:class="prependClasses">{{prependText}}</div>
        </slot>
      </div>
      <div class="snippet-body">
        {{value}}
      </div>
      <div class="snippet-append">
        <slot name="snippet-append">
          <div class="snippet-text" v-bind:class="appendClasses">{{appendText}}</div>
        </slot>
      </div>
    </div>
    <div class="copy-btn-container">
			<a-button type="neutral"
								class="snippet-button shadow"
								ref="copyBtn"
								size="sm"
								title="Copied!"
								@click="doCopy"
							>
							Copy
			</a-button>
			<a-tooltip 	:show.sync="bShowTooltip"
									:target="() => $refs.copyBtn"
									placement="bottom"
									title="Copied!"
									triggers="click blur">

			</a-tooltip>
		</div>
  </div>
</template>

<script>
	export default {
		name: "a-snippet",
		props: {
			type: {
				String,
				default: "default",
				description: "Snippet type(e.g default, primary etc)"
			},
			effect: {
				type: String,
				default: "dark",
				description: "Effect of the snippet (light|dark)"
			},
			round: {
				type: Boolean,
				default: false,
				description: "Whether snippet has rounded corners"
			},
			transparent: {
				type: Boolean,
				default: false,
				description: "Whether snippet is transparent"
			},
			prependText: {
				type: String,
				default: "",
				description: "Pepend text of snippet"
			},
			prependClasses: {
				type: [String, Object],
				default: "",
				description: "Prepend add-on classes for <span></span>"
			},
			appendText: {
				type: String,
				default: "",
				description: "Append text of snippet"
			},
			appendClasses: {
				type: [String, Object],
				default: "",
				description: "Append add-on classes for <span></span>"
			},
			center: {
				type: Boolean,
				default: true,
				description: "Whether code snippet is centered"
			},
			size: {
				type: String,
				default: "default",
				description: "Size of the snippet (sm|default|lg}"
			},
			value: {
				type: String,
				default: "",
				description: "The main code snippet text"
			},
			readOnly: {
				type: Boolean,
				default: true,
				description: "Whether code snippet is read-only"
      },
      fixedHeight: {
        type: Boolean,
        default: true,
        description: "Whether snippet has fixed"
      }
		},
		data() {
			return {
				bShowTooltip: false
			}
		},
		methods: {
			doCopy() {
				this.$copyText(this.value).then(function (e) {
					this.bShowTooltip = true;

					// Hide tooltip after 2S
					setTimeout(function(){
						this.bShowTooltip = false;
					}.bind(this), 2000);

				}.bind(this), function (e) {
					console.log(e)
				});
			}
		}
	}
</script>
