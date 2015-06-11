var RadioOption = React.createClass({
	render: function () {
		return (
			<p className="radio">
				<label>
					<input type="radio" name="expertise" value={this.props.value}/>
					{this.props.children}
				</label>
			</p>
		);
	}

});