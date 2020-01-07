// 코드 18-24 this.handleInputChange 메서드

this.handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
	[name]: value
    });
};
